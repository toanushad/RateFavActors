var Actor = require('../models/actor.server.model');

exports.addActor = function(req, res){

    var actor = new Actor(req.body);
    actor.save(function(error){
        if(error)
            res.status(501).json({error: error});
        else
            res.json(actor);
    });

};


exports.getActor = function(req, res){

    res.json(req.actor);

};


exports.getActorById = function(req, res, next){

    Actor.findOne( { _id: req.params.actorId }, function(error, actor){
        if (!error) {
            req.actor = actor;
            next();
        } else res.status(501).json({error: "No such actor"});
    });

};


exports.listActors = function(req, res){

    Actor
        .find({})
        .populate({
            path: 'ratings',
            model: 'Rating',
            select: 'userRating'
        })
        .exec(function(error, actors){
            if(error)
                res.status(501).json({error: error});
            else
                res.json(actors);
        });


    /*Actor.find({}, function(error, actors){
        if(error)
            res.status(501).json({error: error});
        else
            res.json(actors);
    });*/

};


exports.addToFavorites = function(req, res){



};

