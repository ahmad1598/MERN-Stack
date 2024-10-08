const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema ({
    firstName: {
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required:true
    },
    isLiving:{
        type:Boolean,
        required: true
    },
    bountyAmount:{
        type:String,
        required: true
    },
    type:{
        type: String,
        enum: ["jedi", "sith"],
        required: true
    }
})


module.exports = mongoose.model("Bounty",bountySchema)
