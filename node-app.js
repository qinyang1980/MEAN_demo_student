var express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/student');

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./app'));

// Bootstrap models
require('./models/student');
// Bootstrap routes
require('./routes/student')(app);


app.listen(3000);
console.log('Express server started on port 3000');
