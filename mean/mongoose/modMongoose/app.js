const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8888, ()=> console.log('server is running on port 8888'));