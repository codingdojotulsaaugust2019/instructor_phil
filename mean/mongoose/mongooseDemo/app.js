// require statements
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// set up the config of the app
// set up builtin middleware
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded());
// set where the view files are
app.set('views', __dirname + '/views');
// set up the view engine
app.set('view engine', 'ejs');

// --------------------- connecting to mongoose, the M in MVC ---------------------
mongoose.connect('mongodb://localhost/quoting_dojo', { useNewUrlParser: true});
 
// blueprint on DB document
const quoteSchema = new mongoose.Schema({
 name: {type: String, required: [true, 'Name is required!']},
 quote: String
});

// this creates the collections -> in mongo shell it will be quotes, ie db.quotes.find()
const Quote = mongoose.model('Quote', quoteSchema);
// Quote -> mongoose object

// ------------------------------------------------------------------------------------------------

// app.get('/quotes', function(req, res) {
//   Quote.find({}, function(err, quotes) {
//     if (err) { console.log(err); }
//     res.render('quotes', { quotes: quotes });
//   });
//   console.log('Finding quotes');
// });


app.get('/quotes', function(req, res) {
  Quote.find({})
    // successful response for the async call
    .then(quotes => {
      res.render('quotes', { quotes: quotes });
    })
    // error response for the async call
    .catch(err => {
      console.log(err);
    })
  console.log('Finding quotes');
});


app.post('/quotes', function(req, res) {
  Quote.create(req.body)
  .then(newQuote => {
    console.log(newQuote);
    res.redirect('/quotes');
  })
  .catch(err => {
    // the err is a mongoose error object with the failed validations
    // send to client, ie express-flash 
    console.log(err);
  })
});

app.listen(8888, ()=> console.log('server is running on port 8888'));