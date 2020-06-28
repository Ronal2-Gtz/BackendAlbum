const mongoose = require('mongoose')

let Schema = mongoose.Schema

let imageSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
        required: [true, 'La imagen es requerida']
    },
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Image', imageSchema)