require('./models/db');

const express = require('express');

const employeeController = require('./controllers/employeeController'); // imported the employeecontroller.

const path = require('path');

const exhbs = require('express-handlebars');

const bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());

// to configure express middleware for handlebar we are creating a view directory.
app.set('views', path.join(__dirname, '/views/')); //_dirname is base file directory for this project.

// configuring express engine to handlebars.
app.engine('hbs', exhbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));

//set and started our view engine here.
app.set('view engine', 'hbs');

app.listen(3000, ()=>{
    console.log('Express started at port: 3000');
});

app.use('/employee', employeeController); //middleware function.
