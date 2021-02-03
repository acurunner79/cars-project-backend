require('dotenv').config()
const express = require('express')
const app = express()
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 4000

/////// MIDDLEWARE //////////
app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//////// TEST ROUTE /////////
// app.get('/', (req, res) => {
//     res.json({
//         status: 200,
//         msg: 'This is the test route!'
//     })
// })

///// ROUTES FOR CONTROLLERS ////////
// const carRouter = require('./controllers/userRoutes')
// app.use('/', carRouter)

const userRouter = require('./controllers/userRoutes')
app.use('/user/', userRouter)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
