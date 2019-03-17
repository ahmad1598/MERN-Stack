const express = require('express')
const userRouter = express.Router()
const uuid = require('uuid/v4')


//Fake Database

// const users = [
//     {
//         firstName:"John",
//         lastName: "Doe",
//         age:30,
//         gender:"Male",
//         _id: uuid()
//     },
//     {
//         firstName:"Steve",
//         lastName: "Smith",
//         age:21,
//         gender:"Male",
//         _id: uuid()
//     },
//     {
//         firstName:"Jessica",
//         lastName: "Moral",
//         age:41,
//         gender:"Female",
//         _id: uuid()
//     },
//     {
//         firstName:"Aria",
//         lastName: "johnson",
//         age:15,
//         gender:"Female",
//         _id: uuid()
//     }
// ]


// userRouter.get('/users',(req,res,next) => {
//     res.send(users)
// })

//after user send a request, it will come here and will add a newUserObj to the request
userRouter.use((req,res,next) => {
    req.newUserObj = {name:"John", lastName: "johnson", age:15}
    //by running next() it will go back to a server file and run a next line of code
    next()
})


module.exports = userRouter