import express from "express";
import userController from "../../../adapters/user-controller";

const userRouter = () => {
  const router = express.Router();

  const controller = userController();
  
  router.get("/", controller.welcome);

  return router;
};

export default userRouter;
