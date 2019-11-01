const express = require('express');

const app = express();
// set up builtin middleware
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded());
// set where the view files are
app.set('views', __dirname + '/views');
// set up the view engine
app.set('view engine', 'ejs');

const session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.get('/show', (req, res) => {
  console.log(req.method);
  console.log(req.originalUrl);
  res.send('message from show route');
})

app.get('/show/:id', (req, res) => {
  const { id } = req.params;
  // or
  // const id = req.params.id;
  console.log(id);
  res.json({id: id});
})

app.get('/success', (req, res) => {
  console.log(req.session);
  const person = {
    name: req.session.name,
    location: "Tulsa"
  };
  res.render('success', person);
})

app.post('/process', (req, res) => {
  // post data comes through the req.body
  console.log(req.body);
  req.session.name = req.body.name;
  res.redirect('/success');
})
 
console.log(__dirname);


app.listen(8888, ()=> console.log('server is running on port 8888'));