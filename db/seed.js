const Car = require('../models/car')
const User = require('../models/user')

Car.find({}).remove(() => {
    User.find({}).remove(() => {
        let ford = Car.create({
          make: 'ford',
          model: 'mustang',
          color: 'red'
        }).then(car => {
            Promise.all([
              User.create({
                name: 'jorge'
              }).then(user => {
                  car.users.push(user)
              })
            ]).then(() => {
                car.save()
            })
        })
    })
})