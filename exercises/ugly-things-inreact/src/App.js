import React from 'react'
import {withTodos} from './context/TodoProvider.js'
import TodoForm from './TodoForm.js'
import './style.css'

class App extends React.Component{
    componentDidMount(){
        this.props.getTodos()
    }

    render(){
        return(
            <div className="container">
                <TodoForm />
                <div className="todoContainer">
                {
                    this.props.todos.map(todo => (
                        <div key={todo._id}>
                            <h1>{todo.title}</h1>
                            <p>{todo.description}</p>
                            <img src={todo.imgUrl} alt=""/>
                            <button onClick= {() => {this.props.handleDelete(todo._id)}}>Delete</button>
                            <button onClick = {() => {this.props.handleEdit(todo._id)}}>Edit</button>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}


export default withTodos(App)