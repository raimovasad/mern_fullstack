const { Schema, model } = require('mongoose')


const LinkSchema = new Schema({
 
    from : {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    clicks:{
        type: Number,
        default: 0
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }

})

module.exports = model('Link', LinkSchema)