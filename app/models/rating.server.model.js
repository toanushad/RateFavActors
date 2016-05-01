var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RatingSchema = new Schema({

    actor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Actor'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Actor'
    },
    userRating: Number

});

module.exports = mongoose.model('Rating', RatingSchema);

