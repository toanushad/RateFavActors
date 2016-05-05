var ActorController = require('../controllers/actor.server.controller'),
    UserController = require('../controllers/user.server.controller'),
    RatingController = require('../controllers/rating.server.controller');

module.exports = function(app){

    app.route('/ActorsDbApi/actors')
        .get(UserController.verifyLogIn ,ActorController.listActors)
        .post(UserController.verifyLogIn ,ActorController.addActor)
        .put(UserController.verifyLogIn ,ActorController.addToFavorites);


    app.route('/ActorsDbApi/actors/:actorId')
        .get(UserController.verifyLogIn ,ActorController.getActor);


    app.route('/ActorsDbApi/actors/:actorId/ratings')
        .post(UserController.verifyLogIn ,RatingController.addRating);


    app.param('actorId', ActorController.getActorById);

}

