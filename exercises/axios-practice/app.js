var axios = require("axios");

// var lukySkyWalker = axios.get("https://swapi.co/api/people/1").then(function(response){
//     console.log(response.data)
// }).catch(function(error){
//     console.log(error);
// })
// console.log(lukySkyWalker);

// var ahmad = axios.get('https://api.vschool.io/Ahmad/todo/').then(function(response){
//     console.log(response.data)
// }).catch(function(error){
//     console.log(error);
// })
var newTodo = {
    "title": "MyNewTodoFromVScode"
}

// axios.post('https://api.vschool.io/Ahmad/todo/',newTodo).then(function(response){
//     console.log(response.data);
// }).catch(function(error){
//     console.log(error);
// });

axios.get('https://api.vschool.io/Ahmad/todo/').then(function(response){
    console.log(response.data[0].title)
})

