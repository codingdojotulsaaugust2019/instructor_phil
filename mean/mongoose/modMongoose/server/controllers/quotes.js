const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = {
  index: function(req, res) {
    Quote.find({})
      .then(quotes => {
        res.render('quotes', { quotes: quotes });
      })
      .catch(err => {
        console.log(err);
      })
    console.log('Finding quotes');
    },
  create: function(req, res) {
    Quote.create(req.body)
    .then(newQuote => {
      console.log(newQuote);
      res.redirect('/quotes');
    })
    .catch(err => {
      console.log(err);
    })
  }
}