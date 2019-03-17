const express = require('express')
const app = express()
const morgan = require('morgan')
const uuid = require('uuid/v4')

const users = [
    {
        firstName:"John",
        lastName: "Doe",
        age:30,
        gender:"Male",
        _id: uuid()
    },
    {
        firstName:"Steve",
        lastName: "Smith",
        age:21,
        gender:"Male",
        _id: uuid()
    },
    {
        firstName:"Jessica",
        lastName: "Moral",
        age:41,
        gender:"Female",
        _id: uuid()
    },
    {
        firstName:"Aria",
        lastName: "johnson",
        age:15,
        gender:"Female",
        _id: uuid()
    }
]


//Middlewares
app.use(express.json())
app.use(morgan('dev'))


//Route
app.get("/users",(req,res) => {
    res.send(users)
})


//listen
app.listen(7000, ()=> {
    console.log('Server is running on Port 7000')
})

