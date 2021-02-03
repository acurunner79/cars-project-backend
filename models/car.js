const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const carSchema = new Schema({
    make: String,
    model: String,
    color: String,
    img: String
})

// const Car = mongoose.model('Car', carSchema)

module.exports = carSchema