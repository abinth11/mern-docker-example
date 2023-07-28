import axios, { AxiosResponse, AxiosError } from "axios";
import END_POINTS from "./endpoints";
import { BASE_URL } from "./endpoints";
import { Quote } from "../types/quote";

class QuoteHandler {
  private static handleAxiosError(error: AxiosError): void {
    throw new Error("API request failed: " + error.message);
  }

  public async addQuote(quoteInfo: Quote): Promise<Quote> {
    try {
      const response: AxiosResponse<Quote> = await axios.post(BASE_URL+END_POINTS.ADD_QUOTE, quoteInfo);
      return response.data;
    } catch (error: any) {
      QuoteHandler.handleAxiosError(error);
      // The function does not return anything, but TypeScript expects a Promise to be returned
      // To satisfy TypeScript, we can add a dummy return statement for the catch block
      return {} as Quote;
    }
  }

  public async getQuotes(): Promise<Quote[]> {
    try {
      const response: AxiosResponse = await axios.get(BASE_URL+END_POINTS.GET_QUOTE);
      return response?.data?.data
    } catch (error: any) {
      QuoteHandler.handleAxiosError(error);
      // The function does not return anything, but TypeScript expects a Promise to be returned
      // To satisfy TypeScript, we can add a dummy return statement for the catch block
      return [] as Quote[];
    }
  }
}

export default QuoteHandler;
