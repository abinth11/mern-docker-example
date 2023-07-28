import { QuoteInterface } from "../../types/quote";
import { QuoteRepository } from "../../frameworks/database/mongodb/repositories/quoteRepository";

export const quoteDbInterface = (repository: ReturnType<QuoteRepository>) => {

  const addQuote = async (quoteInfo: QuoteInterface) => await repository.addQuote(quoteInfo);

  const getAllQuotes = async ()=> await repository.getAllQuotes()

  const editQuotes = async (id:string,quoteInfo:QuoteInterface)=> repository.editQuotes(id,quoteInfo)

  return {
    addQuote,
    getAllQuotes,
    editQuotes
  }
};

export type QuoteDBInterface = typeof quoteDbInterface;
