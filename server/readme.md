# server/Dockerfile

# Build stage
# We start with a base image of Node.js version 20 on Alpine Linux.
# This is our build environment.
FROM node:20-alpine AS build

# Set the working directory inside the container.
WORKDIR /usr/src/nodeapp

# Change ownership of the working directory to the non-root user 'node'
# to prevent permission issues when running npm commands.
RUN chown -R node:node /usr/src/nodeapp

# Set the user to 'node', so the following commands will be executed with
# the non-root user, which is considered a good practice for security reasons.
USER node

# Copy package.json and package-lock.json (or yarn.lock) to the container.
# The package files are essential for dependency management.
COPY *.json ./

# Install dependencies using npm ci (clean install) to ensure reproducible builds.
RUN npm ci

# Copy the source code from the local machine to the container's working directory.
# The 'src' folder contains the application source files.
COPY src src

# Build the application using the 'npm run build' command.
# This command will create a production-ready build inside the 'build' directory.
RUN npm run build

# Production stage
# This is the final stage for the production image.
FROM node:20-alpine

# Set the working directory inside the container.
WORKDIR /usr/src/nodeapp

# Change ownership of the working directory to the non-root user 'node'.
RUN chown -R node:node /usr/src/nodeapp

# Copy package.json and package-lock.json (or yarn.lock) to the container.
# We copy only the production dependencies to keep the image small.
# The '--omit=dev' flag skips development dependencies during installation.
# 'npm cache clean --force' helps reduce the image size by clearing the npm cache.
RUN npm ci --omit=dev && npm cache clean --force

# Set the user to 'node'.
USER node

# Copy the production build files from the 'build' directory of the 'build' stage
# (the previous stage) into the container's 'build' directory.
# This step moves the production-ready application into the production image.
COPY --chown=node:node --from=build /usr/src/nodeapp/build ./build

# Expose port 5000 to the outside world. This is the port on which the app will run.
EXPOSE 5000

# The final command to run when the container starts.
# It runs the Node.js application using the 'node' command, specifying the entry point 'build/app.js'.
CMD [ "node", "build/app.js" ]
