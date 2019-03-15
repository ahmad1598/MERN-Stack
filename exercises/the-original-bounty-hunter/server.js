const express = require('express')
const app = express()

app.use(express.json())

app.use("/bounty",require('./routes/bounty.js'))

const PORT = process.env.PORT || 7000
app.listen( PORT , () => {
    console.log(`Server is running on Port ${PORT}`)
})



