const express = require("express");
const app = express();


app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.get('/user',(req,res) => {
    res.send('Another hello from all users')
})


app.listen(3000 , ()=>{
    console.log('App is listening on port 3000!');
});
