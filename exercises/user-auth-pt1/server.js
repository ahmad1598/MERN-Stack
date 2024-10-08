const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
//npm install express-jwt
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 7000

app.use(express.json())
app.use(morgan('dev'))


mongoose.connect('mongodb://localhost:27017/auth-lessons', {useNewUrlParser: true} , () => {
    console.log("[o] Connected to the DB")
})

//Security Checkout - checking to see if the secret in the JWT matches our env secret
app.use("/api",expressJwt({secret: process.env.SECRET}))

//Routes
app.use("/auth", require('./routes/authRoutes.js'))
app.use("/api/posts", require('./routes/postRoutes.js'))


app.use((err,req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})