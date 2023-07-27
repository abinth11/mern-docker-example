1. Command: `docker build`
   Description: Build a Docker image from a Dockerfile.
   Syntax: 
   ``` 
   docker build -t <image_name> [options] <path_to_Dockerfile>
   ```
   Explanation:
   - `-t`: Tags the image with a name and optional tag in the `name:tag` format.
   - `<image_name>`: Specifies the name you want to give to the image.
   - `[options]`: Additional options that can be used during the build process (e.g., `--no-cache` to ignore cached layers).
   - `<path_to_Dockerfile>`: The path to the directory containing the Dockerfile.

   Example:
   ```
   docker build -t my_image:latest .
   ```
   This command will build a Docker image from the Dockerfile in the current directory (`.`) and tag it as `my_image` with the `latest` tag.

2. Command: `docker images` or `docker image ls`
   Description: List Docker images that are currently available on the system.
   Syntax: 
   ```
   docker images [options]
   ```
   Explanation:
   - `[options]`: Additional options to customize the output of the image list (e.g., `--filter`, `--format`).

   Example:
   ```
   docker images
   ```
   This command will display a list of all Docker images available on the system, showing details like the repository, tag, image ID, and size.