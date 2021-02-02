const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const carSchema = new Schema({
    make: {type: String, required: true},
    model: {type: String, required: true},
    color: {type: String, required: true}
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car