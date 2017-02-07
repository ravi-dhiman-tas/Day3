var express = require('express');
var path = require('path');
var bodyParse = require('body-parser');


var index = require('./routes/index');
var tasks = require('./routes/tasks');

var PORT = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set static folder
app.use(express.static(path.join(__dirname, 'client')));

//Body parse
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', tasks);

app.listen(PORT, function () {
    console.log("Server is listening on port " + PORT);
});