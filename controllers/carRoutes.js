const express = require('express')
const router = express.Router()
const Car = require('../models/car')


////////// LISTS ALL CARS ////////////
router.get('/', (req, res) => {
    Car.find({}).populate("cars").then(allCars => {
        res.json(allCars)
    }).catch(err => res.json({status:400, err: err}))
})

///////// GET CAR BY MAKE ///////////
router.get('/:make', (req, res) => {
    Car.findOne({make: req.params.make})
    .then((car) => res.json({status: 200, car: car})
    )
    .catch(err => res.json({status:400, err: err}))
})

///////// CREATE A CAR /////////////
router.post('/', (req, res) => {
    const car = req.body
    Car.create(car)
    .then((car) => res.json({status: 200, data: car})
    )
    .catch(err => res.json({status:400, err: err}))
})

///////// UPDATE A CAR /////////////
router.put('/:id', (req, res) => {
    Car.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((car) => res.json({status: 200, data: car})
    )
    .catch(err => res.json({status:400, err: err}))
})

///////// DELETE A CAR BY ID ///////
router.delete('/:id', (req,res) => {
    Car.findByIdAndDelete({})
    .then((car) => 
    res.json({status: 200, msg: 'car has been deleted'})
    )
    .catch(err => res.json({status: 400, err: err}))
})



module.exports = router