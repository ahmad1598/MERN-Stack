import React, { Component } from 'react'
import AuthForm from './AuthForm.js'
import { withUser } from './context/UserProvider.js'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            formToggle: false
        }
    }

    toggleForm = () => {
        this.setState(prevState => ({ formToggle: !prevState.formToggle }))
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: "",
            errorMessage: ""
        })
    }

    handleLoginSubmit = e => {
        e.preventDefault()

        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        
        this.props.login(credentials)
            // .then(() => this.clearInputs())
            // .catch(err => {
            //     this.setState({errorMessage: err.response.data.message})
            // })

        this.setState({
            username: "",
            password: ""
        })
    }
    
    handleSignupSubmit = e => {
        e.preventDefault()
        console.log('signup')
        // call a signup function
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }

        this.props.signup(credentials)
            // .then(() => this.clearInputs())
            // .catch(err => {
            //     this.setState({errorMessage: err.response.data.message})
            // })

        this.setState({
            username: "",
            password: ""
        })
    }

    render(){
        console.log(this.props)
        return (
            <div>
                {this.state.formToggle ?
                <>
                    <h1>Sign Up</h1>
                    <AuthForm 
                        username={this.state.username}
                        password={this.state.password}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSignupSubmit}
                        btnText="Sign Up"    
                    />
                    
                    <p onClick={this.toggleForm}>Already a User?</p>
                    {/* this.state.errorMessage &&
                        <p style ={{color:"red"}}>{this.state.errorMessage}</p> */}
                </>
                :
                <>
                    <h1>Login</h1>
                    <AuthForm 
                        username={this.state.username}
                        password={this.state.password}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleLoginSubmit}
                        btnText="Login"    
                    />
                    <p style ={{color:"red"}}>{this.props.errorMessage}</p>
                    <p onClick={this.toggleForm}>Not a User yet?</p>
                </>
                }
            </div>
        )
    }
}

export default withUser(Auth)