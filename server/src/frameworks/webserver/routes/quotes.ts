import express from "express";
import quoteController from "../../../adapters/quote-controller";
import { quoteDbInterface } from "../../../application/repositories/quoteInterface";
import { quoteRepository } from "../../database/mongodb/repositories/quoteRepository";

const userRouter = () => {
  const router = express.Router();

  const controller = quoteController(quoteDbInterface, quoteRepository);

  router.get("/", controller.welcome);

  router.post("/add-quote", controller.addQuote);

  router.get("/get-all-quotes", controller.getAllQuotes);

  return router;
};

export default userRouter;
