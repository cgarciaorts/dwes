const mongoose = require('mongoose')
const {Schema} = mongoose

const usuarios = new Schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String
})

module.exports = mongoose.model("usuarios",usuarios)
