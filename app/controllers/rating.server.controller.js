var Rating = require('../models/rating.server.model'),
    Actor  = require('../models/actor.server.model');

exports.addRating = function(req, res){

    var rating = new Rating({
        actor: req.actor,
        user: req.user,
        userRating: req.body.userRating
    });

    rating.save(function(error){
        if(!error) {
            Actor
                .findOneAndUpdate({
                    _id: req.actor._id
                }, {
                    $push: {"ratingsBy": req.user}
                }, {
                    new: true
                })
                .populate('ratings')
                .exec(function(error, actor){
                    if(!error) {
                        res.json(actor);
                    }else {
                        res.status(501).json({ error: error });
                    }
                });
        }else {
            res.status(501).json({ error: error });
        }
    });

};

