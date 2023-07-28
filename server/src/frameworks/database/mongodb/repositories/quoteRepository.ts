import Quote from "../models/quote";
import { QuoteInterface } from "../../../webserver/types/quote";
export const quoteRepository = () => {
  const addQuote = async (quoteInfo: QuoteInterface) => {
    const quote = new Quote(quoteInfo);
    await quote.save();
  };

  const getAllQuotes = async () => {
    const quotes: QuoteInterface[] | null = await Quote.find({});
    return quotes;
  };
  return {
    addQuote,
    getAllQuotes,
  };
};

export type QuoteRepository = typeof quoteRepository;
