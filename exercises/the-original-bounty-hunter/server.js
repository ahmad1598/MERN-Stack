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
//by using app.use we will be able to enable MiddleWare.
//just by giving four argument (err,req,res,next), express knows that this is error handler. they has to be in that order
// if any error occured this code will received.
app.use((err,req,res,next) => {
    //this console.error will console log error on our server
    console.error(err)
    //send an object to front-end with an errMsg property and the message of the error.
    //we will get this consistent object evey single time
    return res.send({errMsg: err.message})
})


//Listen
app.listen( PORT , () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})



