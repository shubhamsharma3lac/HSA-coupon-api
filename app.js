const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const config = require('./models/config');
const usersRouter = require('./routes/users');

var app = express();

if(app.get('env') === 'development'){
    var dev = true;
}

// log if in dev mode
if(dev){
    app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// **********************************************
// Routes
// **********************************************   

app.use(usersRouter);

// handle 404
app.use(function(req, res, next){
    var err = new Error();
    err.status = 404;
    next(err);
})

// development error handler
if(dev){
    app.use(function(err, req, res, next){
        console.log(err);
        res.status(500).send();
    })
}

app.listen(config.port);