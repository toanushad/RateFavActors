module.exports = function(app){

    var UserController = require('../controllers/user.server.controller');

    app.route('/ActorsDbApi/users')
        .get(UserController.listUsers)
        .post(UserController.createUser);

    app.route('/ActorsDbApi/login')
        .post(UserController.login);

    app.route('/ActorsDbApi/logout')
        .get(UserController.logout);

};

