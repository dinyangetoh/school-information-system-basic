var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var api_routes = require('./app/routes/api');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
// Connect to Mongoose
mongoose.connect('mongodb://heroku_dbadmin:nwl6b0kq@ds227525.mlab.com:27525/heroku_nwl6b0kq', { useMongoClient: true });
var db = mongoose.connection;

app.get('/', function(req, res) {
    res.send('Please use API endpoints');
});

app.use('/api', api_routes);


app.listen(3000);

console.log("Running on port 3000");