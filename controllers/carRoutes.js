const express = require('express')
const router = express.Router()
const Car = require('../models/car')

router.get('/', (req, res) => {
    Car.find({}).populate("cars").then(allCars => {
        res.json(allCars)
    }).catch(err => res.json({status:400, err: err}))
})






module.exports = router