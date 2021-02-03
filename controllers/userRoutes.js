const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', (req, res) => {
    User.find({}).then(allUsers => {
        res.json(allUsers)
    }).catch(err => res.json({status: 400, err: err}))
})



module.exports = router