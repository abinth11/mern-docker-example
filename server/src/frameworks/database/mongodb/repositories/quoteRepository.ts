import Quote from "../models/quote";
import { QuoteInterface } from "../../../../types/quote";
export const quoteRepository = () => {

  const addQuote = async (quoteInfo: QuoteInterface) => {
    const quote = new Quote(quoteInfo);
    await quote.save();
  };

  const getAllQuotes = async () => {
    const quotes: QuoteInterface[] | null = await Quote.find({});
    return quotes;
  };

  const editQuotes = async(id:string,quoteInfo:QuoteInterface)=>{
    await Quote.updateOne({_id:id},{...quoteInfo})
  }

  return {
    addQuote,
    getAllQuotes,
    editQuotes
  };
};

export type QuoteRepository = typeof quoteRepository;

