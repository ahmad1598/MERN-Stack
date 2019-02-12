// GET

axios.get('https://api.vschool.io/Ahmad/todo').then(function(response){
    document.onload = function (response) {
        console.log(response.data[0])
    }
})

// var ul = document.getElementById('output');
// function todoOutput(arr){
//     for(var i = 0; i < arr.length;i++){
//         var li = document.createElement('li');
//         li.textContent = arr[i].title;
//         ul.appendChild(li);
//     }
// }

var userNewTodo = document.getElementById('toDoInput').nodeValue;
var userNewTodoObj = {
    "title": userNewTodo
}
document.getElementById('addTaskBtn').addEventListener('click', function(){
    axios.post('https://api.vschool.io/Ahmad/todo',userNewTodoObj).then(function(response){
        console.log(response.data)
    }).catch(function(error){
        console.log(error)
    })
})