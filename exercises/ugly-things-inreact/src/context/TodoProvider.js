import React, {Component} from 'react'
import axios from 'axios'

const TodoContext = React.createContext()

class TodoProvider extends Component{
    constructor(){
        super()
        this.state = {
            todos:[]
        }
    }

    getTodos = () => {
        axios.get('https://api.vschool.io/Ahmad/todo').then(response => {
            this.setState ({
                todos: response.data
            })
        }).catch(error => console.log(error))
    }

    addTodo = (inputs) => {
        const {title,imgUrl,description} = inputs
        const newTodo = {title,imgUrl,description}
        axios.post('https://api.vschool.io/Ahmad/todo', newTodo).then(response => {
            this.setState(prevState => {
                return {
                    todos: [response.data, ...prevState.todos],
                }
            })
        }).catch(error => console.log(error))
    
    }


    handleDelete = (id) => {
        axios.delete(`https://api.vschool.io/Ahmad/todo/${id}`).then(response => {
            this.setState(prevState => {
                return{
                    todos: prevState.todos.filter(todo => todo._id !== id)
                }
            })
        }).catch(err => console.log(err))
    }


    handleEdit = (id,update) => {    
        axios.put(`https://api.vschool.io/Ahmad/todo/${id}`, update).then(response => {
            const updatedTodo = response.data
            this.setState(prevState => {
                return{
                    todos: prevState.todos.map(todo => todo._id === id ? updatedTodo : todo)
                }
            })
        }).catch(err => console.log(err))
    }

    render(){
        const props = {
            todos: this.state.todos,
            getTodos: this.getTodos,
            addTodo: this.addTodo,
            handleDelete: this.handleDelete,
            handleEdit: this.handleEdit
        }
        return(
            <TodoContext.Provider value = {props}>
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}

export const withTodos = C => props => (
    <TodoContext.Consumer>
        {value => <C {...props} {...value}/>}
    </TodoContext.Consumer>
)

export default TodoProvider