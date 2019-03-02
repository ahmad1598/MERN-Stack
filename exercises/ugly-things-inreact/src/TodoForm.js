import React from 'react'
import {withTodos} from './context/TodoProvider.js'


const TodoForm = (props) => {
    return (
        <div className="formContainer">
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="title" value={props.title} onChange={props.handleChange} placeholder="Title"/>
                <input type="text" name="imgUrl" value={props.imgUrl} onChange={props.handleChange} placeholder="img URL"/>
                <input type="text" name="description" value={props.description} onChange={props.handleChange} placeholder="Description"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default withTodos(TodoForm)