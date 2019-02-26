import React from 'react'

const Form = (props) => {
    return(
        <div>
            <h1>{props.state.nameInput}</h1>
            <form onSubmit = {props.handleSubmit}>
                <input type="text" name="nameInput" value = {props.state.nameInput} onChange = {props.handleChange}/>
                <button>Submit</button>
            </form>

            <div>
                {
                    props.state.names.map((name,i) => <h1 key = {i}>{name}</h1>)
                }
            </div>
        </div>
    )
}

export default Form