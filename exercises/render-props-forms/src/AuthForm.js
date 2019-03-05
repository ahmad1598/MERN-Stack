import React from 'react'

const AuthForm = props => {
    const {handleChange, handleSubmit, inputs: {username,password}} = props
    return(
            <form onSubmit={handleSubmit}>
            <h1>{props.formTitle}</h1>
                <input type = "text" onChange={handleChange} name="username" value={username}placeholder="Username" />
                <input type = "password" onChange={handleChange} name="password" value={password}placeholder="Password"/>
                <button>{props.formTitle}</button>
                <span onClick={props.toggler}>Click here to {props.formTitle === "Sign Up" ? "Login" : "Sign Up"}</span>
            </form>
       
    )
}

export default AuthForm