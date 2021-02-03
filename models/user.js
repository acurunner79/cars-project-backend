const mongoose = require('../db/connection')
const carSchema = require('./car')

const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    name: String,
    cars: carSchema,
})

const User = mongoose.model('User', userSchema)
module.exports = User