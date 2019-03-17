const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const PORT = process.env.PORT || 7000

//Middlewares 
app.use(express.json())
app.use(morgan('dev'))

//DB connect
// bounties is a DB name
mongoose.connect("mongodb://localhost:27017/bounties",{useNewUrlParser:true},()=>{
    console.log("[o] Connected to the DB")
})

//Routes
app.use("/bounties",require('./routes/bounty.js'))


//Error Handling
app.use((err,req,res,next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})


//Listen
app.listen( PORT , () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})



