import React, { useEffect, useState } from "react";
import { Quote } from "../types/quote";
import QuoteHandler from "../api/quotes";

const Quotes: React.FC = () => {
  const quoteHandler = new QuoteHandler();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const fetchQuotes = async () => {
    try {
      const response = await quoteHandler.getQuotes();
      setQuotes(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            <h5>{quote.name}</h5>
            <p>{quote.quote}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quotes;
