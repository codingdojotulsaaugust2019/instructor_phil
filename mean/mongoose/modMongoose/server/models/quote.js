const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Name is required!']},
  quote: String
 });

const Quote = mongoose.model('Quote', quoteSchema);