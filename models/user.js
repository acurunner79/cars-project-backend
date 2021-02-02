const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    cars: [
        {ref: 'Car',
         type: mongoose.Schema.Types.ObjectId
        }
    ]
})

const User = mongoose.model('User', userSchema)
module.exports = User