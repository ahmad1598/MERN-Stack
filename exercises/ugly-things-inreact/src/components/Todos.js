import React,{Component} from 'react'
import Form from './Form.js'
class Todos extends Component {
    constructor(props){
        super(props)
        this.state = {
            isTaggled : false,
            title: props.title,
            description: props.description,
            imgUrl: props.imgUrl
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            isTaggled : !prevState.isTaggled
        }))
    }

    handleChange = (e) => {
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const update = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }
        this.props.handleEdit(this.props._id,update)
        this.toggler()
    }

    render(){
        const { title,description,imgUrl,_id } = this.props
        return (
            <div id="firstLayer">
            {
                !this.state.isTaggled 
                ?
                    <div>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <img src={imgUrl} alt=""/>
                        <button id="deleteBtn" onClick= {() => {this.props.handleDelete(_id)}}>Delete</button>
                        <button id="editBtn" onClick = {this.toggler}>Edit</button>
                    </div>
                :
                    <div className="editForm">
                        <Form
                            {...this.state}
                            btnText = "Submit Edit"
                            handleChange = {this.handleChange}
                            handleSubmit = {this.handleSubmit}
                            />
                            <button id="closeBtn" onClick={this.toggler}>Close</button>
                    </div>
            }
            </div>
        )
    }
}

export default Todos