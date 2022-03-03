const mongoose = require('mongoose')
const {Schema} = mongoose

const login = new Schema({
    nombre: String,
    password: String,
})

module.exports = mongoose.model("login",login)
