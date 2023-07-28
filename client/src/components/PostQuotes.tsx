import React, { useState } from "react";
import "../styles/components.css";
import QuoteHandler from "../api/quotes";

const QuoteForm: React.FC = () => {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  const quoteHandler = new QuoteHandler();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
       await quoteHandler.addQuote({
        name: author,
        quote,
      });
      setAuthor("");
      setQuote("");
    } catch (error) {
      console.log(error);
      console.log("Submitted:", { author, quote });
      setAuthor("");
      setQuote("");
    }
  };

  return (
    <div className='quote-form-container'>
      <h2>Post a Quote</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='author'>Author:</label>
          <input
            type='text'
            id='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='quote'>Quote:</label>
          <textarea
            id='quote'
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Submit Quote</button>
      </form>
    </div>
  );
};

export default QuoteForm;
