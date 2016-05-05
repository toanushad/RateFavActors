var User = require('../models/user.server.model'),
    jwt = require('jsonwebtoken'),
    config = require('../../config/config');

exports.createUser = function(req, res){

    var user = new User(req.body);
    user.save(function(error){
        if(error)
            res.status(501).json({error: error});
        else
            res.json(user);
    });

};


exports.listUsers = function(req, res){

    User.find({}, function(error, users){
        if(error)
            res.status(501).json({error: error});
        else
            res.json(users);
    });

};


exports.login = function(req, res, next){

    User.findOne({
        username: req.body.username
    }, function(error, user){

        if(error){
            return res.status(500).json({err: err});
        } else if(! user){
            return res.status(401).json({err: 'Unknown user'});
        } else if(! user.authenticate(req.body.password)){
            return res.status(500).json({err: 'Invalid username or password' });
        } else {
            var token = jwt.sign({user: user}, 'development', {
                expiresInMinutes: 1440 // expires in 24 hours
            });

            res.status(200).json({
                token: token,
                user: user
            });
        }
    });

};


exports.logout = function(req, res){

    res.status(200).json({ status: "success"});

};


exports.verifyLogIn = function(req, res, next){

    var token = req.headers['x-access-token'];
    jwt.verify(token, 'development', function(err, decoded) {
        if(err) {
            return res.status(403).json({err: 'User requires login'});
        } else {
            req.user = decoded.user;
            next();
        }
    });

}

