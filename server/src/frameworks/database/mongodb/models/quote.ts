import {Schema,model} from "mongoose"

const quoteSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
});

const Quote = model("Quote", quoteSchema);

export default Quote
