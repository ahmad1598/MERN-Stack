const express = require('express')
const multer = require('multer')
const math = require('path')


const app = express()

app.get('/',()=> res.render('index'))

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on porg ${port}`)
})