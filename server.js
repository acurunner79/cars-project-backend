const express = require('express')
const app = express()
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 4000
/////// MIDDLEWARE //////////
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.json({
        status: 200,
        msg: 'This is the test route!'
    })
})

///// ROUTES FOR CONTROLLERS GO HERE ////////

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
