# Use the official Node.js LTS image as the base image
FROM node:lts as build

# Set the working directory inside the container
# This will be the base directory for all subsequent commands in the Dockerfile.
WORKDIR /app

# Copy package.json and package-lock.json to the container
# These files are essential for dependency management.
COPY package.json package-lock.json ./

# Install app dependencies
# Run 'npm install' to install the required Node.js packages specified in package.json.
RUN npm install

# Install TypeScript and Vite's CLI globally in the container
# TypeScript is a typed superset of JavaScript used for development.
# Vite is a fast build tool for modern web development.
RUN npm install -g typescript vite

# Copy the entire application code to the container
# This command copies all the files and directories from the local machine to the container.
COPY . .

# Build the React app for production using Vite
# Run 'npm run build' to create a production build of the React app using Vite.
RUN npm run build

# Use a lightweight HTTP server to serve the built files
# This creates a new stage in the Dockerfile for the production image.
FROM node:lts-slim

# Set the working directory inside the container
# Same as in the previous stage, this will be the base directory for all subsequent commands.
WORKDIR /app

# Copy the built app from the previous stage
# Copy the 'dist' directory containing the production build files from the 'build' stage to this stage.
# Also, copy the 'node_modules' directory to include the production dependencies.
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

# Expose the port that the app will run on (if using Vite's default port, which is 3000)
# This is an optional step to document the port that should be mapped when running the container.
EXPOSE 3000

# Start the HTTP server to serve the app
# Use 'npx serve' to start the lightweight HTTP server and serve the files from the 'dist' directory.
CMD ["npx", "serve", "dist", "-s"]
