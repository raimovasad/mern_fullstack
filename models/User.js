const { Schema, model } = require('mongoose')


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    links: [{ type: Schema.Types.ObjectId, ref: "Link", required: true }]

})

module.exports = model('User', userSchema)