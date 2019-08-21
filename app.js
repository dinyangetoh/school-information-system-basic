// Import required modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Import handlebars and configure with helper functions
var exphbs = require('express-handlebars');
var handlebars = require('./app/helpers/handlebars.js')(exphbs);

// Import rout files
var api_routes = require('./app/routes/api');
var web_routes = require('./app/routes/web');

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Setup server port
var port = process.env.PORT || 8080;

// Frontend configurations for template engine
app.engine('.hbs', handlebars.engine, exphbs({
    defaultLayout: 'layout',
    extname: '.hbs',
    layoutsDir: './web/views/layouts'
}));
app.set('view engine', '.hbs');
// Set directory for template views
app.set('views', __dirname + '/web/views/');
app.set('view options', {
    layout: 'layout'
});


mongoose.Promise = global.Promise;
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/sis',{ useNewUrlParser: true } );
// mongoose.connect('mongodb://heroku_dbadmin:nwl6b0kq@ds227525.mlab.com:27525/heroku_nwl6b0kq', { useMongoClient: true });
var db = mongoose.connection;

// API routes
app.use('/api', api_routes);
// Web routes
app.use('/', web_routes);


app.listen(port, function () {
    console.log("Running on port " + port);
});