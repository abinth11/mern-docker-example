import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { QuoteInterface } from "../frameworks/webserver/types/quote";
import {
  addQuoteUseCase,
  getAllQuotesUseCase,
} from "../application/use-case/quotes";
import { QuoteDBInterface } from "../application/repositories/quoteInterface";
import { QuoteRepository } from "../frameworks/database/mongodb/repositories/quoteRepository";

const quoteController = (
  quoteInterface: QuoteDBInterface,
  quoteImpl: QuoteRepository
) => {
  const dbRepoQuote = quoteInterface(quoteImpl());
  const welcome = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({
      status: "success",
      message: "Welcome to the server",
      data: null,
    });
  });

  const addQuote = asyncHandler(async (req: Request, res: Response) => {
    const quote: QuoteInterface = req.body;
    await addQuoteUseCase(quote, dbRepoQuote);
    res
      .status(200)
      .json({ status: "success", message: "successfully posted a quote" });
  });

  const getAllQuotes = asyncHandler(async (req: Request, res: Response) => {
    const quotes: QuoteInterface[] = await getAllQuotesUseCase(dbRepoQuote);
    res.status(200).json({
      status: "success",
      message: "successfully posted a quote",
      data: quotes,
    });
  });

  return {
    welcome,
    addQuote,
    getAllQuotes,
  };
};

export default quoteController
