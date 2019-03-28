const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

})


// It's critical that you don't convert this to an arrow function
// Otherwise it won't use the correct instance of `this`
//Password encryption funtion on /auth/signup
userSchema.pre("save" , function(next) {
    const user = this;
    if(!user.isModified("password")) return next();
    bcrypt.hash(user.password, 10 , (err, hash) => {
        if(err) return next(err)
        user.password = hash;
        next();
    });
});


//Again, do not change these function declarations to arrow functions!!!
userSchema.methods.checkPassword = function(passwordAttempt , callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        callback(null, isMatch)
    })
}

//remove password from usre object before sending object to the front end
userSchema.methods.withoutPassword = function () {
    //turn it to an object
    const user = this.toObject()
    delete user.password
    return user
}


module.exports = mongoose.model("User", userSchema)
