const mongoose = require('mongoose')

let Schema = mongoose.Schema

let imageSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
        required: [true, 'La ruta es requerida']
    },
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
})

module.exports = model('Image', imageSchema)