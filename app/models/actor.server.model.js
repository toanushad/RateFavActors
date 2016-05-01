var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ActorSchema = new Schema({

    name: String,
    details: String,
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Rating'
        }
    ]

});

module.exports = mongoose.model('Actor', ActorSchema);

