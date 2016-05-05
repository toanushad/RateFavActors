var expressConfig = require('./config/express'),
    mongooseConfig = require('./config/mongoose');

var expressApp = expressConfig(),
    database = mongooseConfig();

process.env.NODE_ENV= 'development';
expressApp.listen(3000);
module.exports = expressApp;

