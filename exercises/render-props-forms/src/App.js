import React from 'react'
import Toggle from './shared/Toggle.js'
import AuthForm from './AuthForm.js'
import Form from './shared/Form.js'
import './style.css'
const App = () => {
    return (
        <div className="auth-form-container">
            <Toggle render ={({isToggled, toggler}) => 
                <>
                    {!isToggled
                        ? <Form 
                            render={props => <AuthForm {...props} toggler={toggler}formTitle = "Sign Up" /> }
                            inputs={{username: "" , password: ""}}
                            submit = {inputs => alert(inputs.username)}
                        />
                        : <Form 
                            render={props => <AuthForm {...props} toggler={toggler}formTitle = "Login" /> }
                            inputs={{username: "" , password: ""}}
                            submit = {inputs => alert(inputs.username)}
                    />
                    }
                </>
            }/>
        </div>
    )
}

export default App
