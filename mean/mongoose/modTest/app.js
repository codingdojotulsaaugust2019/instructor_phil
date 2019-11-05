const express = require('express');

const app = express();

app.use(express.static(__dirname + '/static/'));
app.use(express.urlencoded());

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(8888, ()=> console.log('listening on port 8888'));