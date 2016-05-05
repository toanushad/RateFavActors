var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

module.exports = function(){

    var expressApp = express(),
        mainRoutes = require('../app/routes/main.server.routes'),
        userRoutes = require('../app/routes/user.server.routes'),
        actorRoutes = require('../app/routes/actor.server.routes');

    expressApp.use(express.static('./public'));
    if(process.env.NODE_ENV == "development")
        expressApp.use(morgan('dev'));
    expressApp.use(bodyParser.urlencoded({
        extended: true
    }));
    expressApp.use(bodyParser.json());

    userRoutes(expressApp);
    actorRoutes(expressApp);
    mainRoutes(expressApp);

    return expressApp;

};
