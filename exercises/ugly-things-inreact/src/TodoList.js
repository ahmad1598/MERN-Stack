import React from 'react'
import Todos from './Todos.js'

const TodoList = props => {
    const mappedTodos = props.todos.map (todo => 
            <Todos 
                {...todo}
                handleDelete = {props.handleDelete}
                handleEdit = {props.handleEdit}
                key= {todo._id}
            />
        )

        return(
            <div className="todoContainer">
                {mappedTodos}
            </div>
        )
}

export default TodoList 