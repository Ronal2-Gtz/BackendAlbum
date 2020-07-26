const mongoose = require('mongoose')

let Schema = mongoose.Schema

let imageSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    nameImage:{
        type: String,
        required: [true, 'el nombre es requerido']
    },
    image: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Image', imageSchema)