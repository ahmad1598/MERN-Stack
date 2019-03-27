const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

app.use(express.json())
app.use(morgan('dev'))


mongoose.connect('mongodb://localhost:27017/auth-lessons', {useNewUrlParser: true} , () => {
    console.log("[o] Connected to the DB")
})


//Routes
app.use("/auth", require('./routes/authRoutes.js'))


app.use((err,req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})