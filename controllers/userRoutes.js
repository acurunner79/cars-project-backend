const express = require('express')
const router = express.Router()
const User = require('../models/user')


////////// LISTS ALL USERS ////////////
router.get('/', (req, res) => {
    User.find({}).populate("users").then(allUsers => {
        res.json(allUsers)
    }).catch(err => res.json({status:400, err: err}))
})

///////// GET USER BY NAME ///////////
router.get('/:name', (req, res) => {
    User.findOne({name: req.params.name})
    .then((user) => res.json({status: 200, user: user})
    )
    .catch(err => res.json({status:400, err: err}))
})

///////// CREATE A USER /////////////
router.post('/', (req, res) => {
    const user = req.body
    User.create(car)
    .then((user) => res.json({status: 200, data: user})
    )
    .catch(err => res.json({status:400, err: err}))
})

///////// UPDATE A USER /////////////
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((user) => res.json({status: 200, data: user})
    )
    .catch(err => res.json({status:400, err: err}))
})



///////// DELETE A USER BY ID ///////
router.delete('/:id', (req,res) => {
    User.findByIdAndDelete({})
    .then((user) => 
    res.json({status: 200, msg: 'User has been deleted'})
    )
    .catch(err => res.json({status: 400, err: err}))
})



module.exports = router