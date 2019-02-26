import React,{Component} from 'react'
import Form from './Form.js'
class App extends Component {
    constructor(){
        super()
        this.state = {
            nameInput:"",
            names:[]
        }
    }

    handleChange = (e) => {
        this.setState({
            nameInput:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return {
                names: [...prevState.names, this.state.nameInput],
                nameInput: ""
            }
        })
    }

    render(){
        return(
            <div>
                <Form state = {this.state} handleChange= {this.handleChange} handleSubmit = {this.handleSubmit}/>
            </div>
        )
    }
}


export default App