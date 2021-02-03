// const Car = require('../models/car')
const User = require('../models/user')

// Car.find({}).remove(() => {
//     User.find({}).remove(() => {
//         let ford = Car.create({
//           make: 'ford',
//           model: 'mustang',
//           color: 'red'
//         }).then(car => {
//             Promise.all([
//               User.create({
//                 name: 'jorge'
//               }).then(user => {
//                   car.users.push(user)
//               })
//             ]).then(() => {
//                 car.save
//             })
//         })
//     })
// })

const carCollection = [
  {
  name: "Jorge",
  cars: {
    make: "Acura",
    model: "Integra",
    color: "Red",
    img: "https://th.bing.com/th/id/R13f84257ab860acd148633256934adce?rik=Prkp6sdQg%2fcjxg&riu=http%3a%2f%2fcarphotos.cardomain.com%2fride_images%2f1%2f3107%2f1681%2f7765840001_large.jpg&ehk=1rVusGf23EVbR0uq6TwpEGUzY2UEmsJby0O4sIPNlAU%3d&risl=&pid=ImgRaw"
  },
},
 {
  name: "Kaung",
  cars: {
    make: "VW",
    model: "Beetle",
    color: "Yellow",
    img: "https://ccmarketplace.azureedge.net/cc-temp/listing/117/3690/14872072-1970-volkswagen-beetle-std.jpg"
  },
 },
 {
  name: "Julien",
  cars: {
    make: "Toyota",
    model: "Camry",
    color: "Silver",
    img: "https://ccmarketplace.azureedge.net/cc-temp/listing/117/3690/14872072-1970-volkswagen-beetle-std.jpg"
  },
 },
]

User 
.create(carCollection).then((cars) => {
  console.log(cars);
})
.catch((err) => {console.log(err)
})