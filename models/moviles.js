const mongoose = require('mongoose')
const {Schema} = mongoose

const moviles = new Schema({
    nombre: String,
    modelo: String,
    precio: Number
})

module.exports = mongoose.model("moviles",moviles)
