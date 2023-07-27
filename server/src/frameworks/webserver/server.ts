import { Server } from "http";
import CONFIG from "../../config";

const serverConfig = (server: Server) => {
  const startServer = () => {
    server.listen(CONFIG.PORT, () => {
      console.log(`Server listening on Port ${CONFIG.PORT}`);
    });
  };
  return {
    startServer,
  };
};

export default serverConfig;
