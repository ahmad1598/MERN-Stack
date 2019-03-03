import React from 'react'
import { withTodos } from './context/TodoProvider.js'
import Form from './Form.js'
import TodoList from './TodoList.js'
import './style.css'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            title:"",
            imgUrl:"",
            description:""
        }
    }
    componentDidMount(){
        this.props.getTodos()
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            title:'',
            description:'',
            imgUrl:''
        })
    }

    render(){
        const {title,imgUrl,description} = this.state
        return(
            <div className="container">
                <Form 
                    title={title} 
                    imgUrl={imgUrl} 
                    description={description} 
                    handleChange = {this.handleChange} 
                    handleSubmit = {this.handleSubmit}
                    btnText = "Submit Todo"
                    />
                <TodoList 
                    todos={this.props.todos}
                    handleDelete = {this.props.handleDelete}
                    handleEdit = {this.props.handleEdit}
                />
            </div>
        )
    }
}


export default withTodos(App)