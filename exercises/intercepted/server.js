const express = require('express')
const app = express()
const morgan = require('morgan')
const uuid = require('uuid/v4')



// app.use(express.json())
// app.use(morgan('dev'))

// on this line we are telling if any request comes, go check the userRoutes file
app.use(require('./routes/userRoutes.js'))

//by running next() on the userRoutes file, it will come and run the code below
app.use((req,res) => {
    res.send(req.newUserObj)
})



//listen
app.listen(7000, ()=> {
    console.log('Server is running on Port 7000')
})

