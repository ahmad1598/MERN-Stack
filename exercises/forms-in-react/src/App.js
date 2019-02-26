import React,{Component} from 'react'

class App extends Component {
    constructor(){
        super()
        this.state = {
            nameInput: "",
            ageInput:"",
            names:[]
        }
    }

    handleChange = (e) => {
        //we are doing destrcution here
        const {name, value} = e.target
        this.setState({
            // [e.target.name]: e.target.value
            [name]:value
            
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        // alert(this.state.nameInput)

        this.setState(prevState => {
            return{
                //will garb the prev names and add the new names all to the array
                names:[...prevState.names, this.state.nameInput],
                nameInput:"",
                ageInput:""
            }
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.nameInput}</h1>
                <h1>{this.state.ageInput}</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input type = "text" name="nameInput" value = {this.state.name} onChange = {this.handleChange}/>
                    <input type="text" name="ageInput" value = {this.state.ageInput} onChange = {this.handleChange}/>
                    <button>Submit</button>
                </form>

                {this.state.names.map((name,i) => <h1 key={i}>{name}</h1>)}
            </div>
        )
    }
}


export default App