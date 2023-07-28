# Use the official Node.js LTS image as the base image
FROM node:lts as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install app dependencies
RUN npm install

# Install TypeScript and Vite's CLI globally in the container
RUN npm install -g typescript vite

# Copy the entire application code to the container
COPY . .

# Build the React app for production using Vite
RUN npm run build

# Use a lightweight HTTP server to serve the built files
FROM node:lts-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

# Expose the port that the app will run on (if using Vite's default port, which is 3000)
EXPOSE 3000

# Start the HTTP server to serve the app
CMD ["npx", "serve", "dist", "-s"]
