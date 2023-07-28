import { QuoteDBInterface } from "../repositories/quoteInterface";
import { QuoteInterface } from "../../frameworks/webserver/types/quote";
import HttpStatusCodes from "../../constants/httpStatusCode";
import AppError from "../../utils/app-error";

export const addQuoteUseCase = async (
  quoteInfo: QuoteInterface,
  quoteRepository: ReturnType<QuoteDBInterface>
) => {
  if (!quoteInfo) {
    throw new AppError("Please provide a quote", HttpStatusCodes.BAD_REQUEST);
  }
  await quoteRepository.addQuote(quoteInfo);
};

export const getAllQuotesUseCase = async (
  quoteRepository: ReturnType<QuoteDBInterface>
) => {
  const quotes: QuoteInterface[] | null = await quoteRepository.getAllQuotes();
  return quotes;
};
