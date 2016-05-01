var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({

    firstName: String,
    lastName: String,
    username: String,
    password: String,
    favourites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Actor'
    }]

});

UserSchema
    .virtual('fullName')
    .get(function(){

        return this.firstName + ' '+ this.lastName;

    })
    .set(function(fullName){

        var names=fullName.split(' ');
        this.firstName=names[0];
        this.lastName=names[1];

    });

UserSchema.methods.authenticate = function(password) {

    return this.password === password;

};

UserSchema.set('toJSON', { getter: true, virtuals: true });

module.exports = mongoose.model('User', UserSchema);

