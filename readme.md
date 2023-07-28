# Docker Compose Setup for Frontend and Backend Services

This repository contains the Docker Compose configuration to set up the frontend and backend services of a web application using Node.js and Express.js.

## Prerequisites

Before you proceed, ensure that you have the following installed on your system:

- [Docker](https://www.docker.com/get-started)

## How to Use

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Configure the Services:

   - **Frontend Service (React App):**
     - The frontend service uses [Vite](https://vitejs.dev/) to build the React application.
     - Place your frontend source code in the `./client` directory.
     - Customize the `Dockerfile` inside the `./client` directory if needed.
     - The frontend service will be exposed on port 3000.

   - **Backend Service (Node.js with Express.js):**
     - The backend service runs a Node.js application with Express.js.
     - Place your backend source code in the `./server` directory.
     - Customize the `Dockerfile` inside the `./server` directory if needed.
     - The backend service will be exposed on port 5000.

3. Build and Run the Containers:

   Run the following command from the root directory of this repository:

   ```bash
   docker-compose up
   ```

   This will build and start both frontend and backend containers. You can access your application at `http://localhost:3000`.

   **Note:** If you encounter any issues during the build process, make sure you have the correct dependencies and configurations in your frontend and backend projects.

4. Optional MongoDB Service (Commented Out):

   If your application requires a MongoDB service, you can uncomment the MongoDB service section in the `docker-compose.yml` file and adjust the configurations accordingly.

## Customization

- Modify the `Dockerfile` in the `./client` and `./server` directories to suit your specific project requirements.
- Add environment variables to the backend service by creating a `.env` file inside the `./server` directory.

## Cleanup

To stop and remove the containers, run:

```bash
docker-compose down
```

## Additional Notes

- The custom network "my_network" allows communication between the frontend and backend services within the Docker environment.
- The named volume "mongo-data" (commented out) can be used to persist MongoDB data across container restarts.

## Docker Compose Configuration Explanation

The `docker-compose.yml` file in this repository defines the services required for the frontend and backend of the web application. Below is an explanation of the main sections:

### Frontend Service (frontend)

- **Build Configuration:**
  - The `context` specifies the directory where the Dockerfile for the frontend service resides, in this case, `./client`.
  - The `dockerfile` specifies the name of the Dockerfile to use for building the frontend service.

- **Container Configuration:**
  - The `container_name` sets a custom name for the frontend container, which will be used as its identifier.
  - The `ports` section maps port 3000 of the host to port 3000 of the frontend service container, allowing access to the application from `http://localhost:3000`.
  - The `depends_on` section specifies that the frontend service depends on the backend service. This ensures that the backend service is up and running before the frontend service starts.

- **Network Configuration:**
  - The `networks` section defines a custom bridge network named "my_network" that will be used to attach both frontend and backend containers.

### Backend Service (backend)

- **Build Configuration:**
  - The `context` specifies the directory where the Dockerfile for the backend service resides, in this case, `./server`.
  - The `dockerfile` specifies the name of the Dockerfile to use for building the backend service.

- **Container Configuration:**
  - The `container_name` sets a custom name for the backend container, which will be used as its identifier.
  - The `ports` section maps port 5000 of the host to port 5000 of the backend service container, allowing access to the backend API from `http://localhost:5000`.

- **Environment Configuration:**
  - The `env_file` section specifies the location of the `.env` file, which contains environment variables for the backend service.

- **Network Configuration:**
  - The backend service is also attached to the "my_network" custom bridge network to allow communication with the frontend service.

- **Health Check:**
  - The `healthcheck` section configures a health check for the backend service. It checks the health of the service by sending a HTTP GET request to `http://localhost:5000/health` every 30 seconds. If the service does not respond within 10 seconds or returns an error, Docker will attempt to restart the container up to 5 times.

### Custom Network (networks)

- The `networks` section defines the custom bridge network named "my_network". This network allows both frontend and backend containers to communicate with each other internally, isolated from other containers on the host.

### Optional MongoDB Service (mongodb)

- The MongoDB service section is commented out by default. If your application requires MongoDB, you can uncomment this section and modify the configurations accordingly.

- The MongoDB service is based on the official `mongo` image and exposes port 27000 on the host to access MongoDB.

- Environment variables `MONGO_INITDB_ROOT_USERNAME` and `MONGO_INITDB_ROOT_PASSWORD` are set to configure the root user credentials for MongoDB.

- A named volume "mongo-data" is defined (commented out). This volume is used to persist MongoDB data across container restarts.

---

Feel free to use this Docker Compose setup as a starting point for your web application using frontend and backend services. If you have any questions or encounter any issues, please don't hesitate to open an issue in this repository. Happy coding!