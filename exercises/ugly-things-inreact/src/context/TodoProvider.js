import React, {Component} from 'react'
import axios from 'axios'

//Provide & Consumer
const TodoContext = React.createContext()

class TodoProvider extends Component{
    constructor(){
        super()
        this.state = {
            title:"",
            imgUrl:"",
            description:"",
            id:"",
            todos:[]
        }
    }

    getTodos = () => {
        
        axios.get('https://api.vschool.io/Ahmad/todo').then(response => {
            // console.log(response.data)
            this.setState ({
                todos: response.data
            })
        }).catch(error => console.log(error))
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {title,imgUrl,description} = this.state
        // console.log(title)
        const newTodo = {title,imgUrl,description}
        
        axios.post('https://api.vschool.io/Ahmad/todo', newTodo).then(response => {
            //update state
            this.setState(prevState => {
                return {
                    todos: [response.data, ...prevState.todos],
                    title: '',
                    description:'',
                    imgUrl:''
                }
            })
        }).catch(error => console.log(error))
    }

    handleDelete = (id) => {
        axios.delete(`https://api.vschool.io/Ahmad/todo/${id}`).then(response => {
            this.setState(prevState => {
                this.getTodos()
            })
        })
    }

    handleEdit = (id) => {
        const newTitle = prompt('New title')
        const newImgUrl = prompt('New image URL')
        const newDescription = prompt('New Description')
        const newData = {
            title:newTitle ,
             imgUrl: newImgUrl, 
             description: newDescription
        }
       
        axios.put(`https://api.vschool.io/Ahmad/todo/${id}`,{newData}).then(response => {
            console.log(response.data)
            return(
                <div>
                    <h1>{this.state.title}</h1>
                </div>
            )

        })
    }

    render(){
        const props = {
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            description: this.state.description,
            todos: this.state.todos,
            getTodos: this.getTodos,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
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
        {value => <C {...props} {...value} /> }
    </TodoContext.Consumer>
)

export default TodoProvider