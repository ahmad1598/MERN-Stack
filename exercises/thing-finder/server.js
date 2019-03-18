const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

app.use('/fruit', require('./routes/fruitRouter.js'))


app.listen(7000 , () => {
    console.log('Server is running on port 7000')
})