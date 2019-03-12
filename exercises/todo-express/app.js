const express = require('express');
const app = express();
const uuid = require('uuid/v4')
const bodyParser = require('body-parser')

let todos = [
    {
        "name": "The name",
        "description": "The description of the todo",
        "imageUrl": "http://www.myimage",
        "completed": false,
        "_id": uuid()
    },
    {
        "name": "new todo",
        "description": "he todo",
        "imageUrl": "www.myimage",
        "completed": false,
        "_id": uuid()
    }
]

app.use(express.json())

app.get('/todos',(req,res)=>{
    // console.log(uuid)
    res.send(todos);
    
});
app.get(`/todos/:_id`,(req,res)=>{
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    res.send(foundTodo)
    if(!foundTodo){
        res.send('Todo not found...')
    }
    // const todo = todos.find(todo => todo.id === parseInt(req.params.id));
    // if(!todo) res.status(404).send('the todo with the given ID was not found');
    // res.send(todo)
    
})

app.post('/todos',(req,res) => {
    req.body._id = uuid()
    todos.push(req.body)
    res.send(req.body)
})

app.delete("/todos/:_id",(req,res) => {
    const updatedTodos = todos.filter(todo => todo._id !== req.params._id)
    todos = updatedTodos
    res.send(todos)
})

app.put("/todos/:_id",(req,res) => {
    const foundTodo = todos.find(todo => todo._id === req.params._id)
    Object.assign(foundTodo,req.body)
    res.send(foundTodo)
})


app.listen(6000, () => {
    console.log('App is listening on port 6000...')
});