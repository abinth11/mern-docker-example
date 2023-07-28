import { QuoteInterface } from "../../frameworks/webserver/types/quote";
import { QuoteRepository } from "../../frameworks/database/mongodb/repositories/quoteRepository";

export const quoteDbInterface = (repository: ReturnType<QuoteRepository>) => {

  const addQuote = async (quoteInfo: QuoteInterface) => await repository.addQuote(quoteInfo);

  const getAllQuotes = async ()=> await repository.getAllQuotes()

  return {
    addQuote,
    getAllQuotes
  }
};

export type QuoteDBInterface = typeof quoteDbInterface;
