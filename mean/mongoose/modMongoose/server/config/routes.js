const Quotes = require('./../controllers/quotes');

module.exports = (app) => {
  app.get('/quotes', Quotes.index);
  app.post('/quotes', Quotes.create);
}