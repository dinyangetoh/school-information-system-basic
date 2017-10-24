var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var exphbs = require('express-handlebars');
var handlebars = require('./app/helpers/handlebars.js')(exphbs);

var api_routes = require('./app/routes/api');
var web_routes = require('./app/routes/web');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// Frontend configurations for template engine
app.engine('.hbs', handlebars.engine, exphbs({ defaultLayout: 'layout', extname: '.hbs', layoutsDir: './web/views/layouts' }));
app.set('view engine', '.hbs');

app.set('views', __dirname + '/web/views/');
app.set('view options', { layout: 'layout' });


mongoose.Promise = global.Promise;
// Connect to Mongoose
mongoose.connect('mongodb://heroku_dbadmin:nwl6b0kq@ds227525.mlab.com:27525/heroku_nwl6b0kq', { useMongoClient: true });
//mongoose.connect('mongodb://localhost/sis', { useMongoClient: true });

var db = mongoose.connection;

app.use('/api', api_routes);
app.use('/', web_routes);


app.listen(port, function() {
    console.log("Running on port " + port);
});