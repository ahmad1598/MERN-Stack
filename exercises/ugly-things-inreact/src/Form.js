import React from 'react'


const Form = (props) => {
    return (
        <div className="formContainer">
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="title" value={props.title} onChange={props.handleChange} placeholder="Title"/>
                <input type="text" name="imgUrl" value={props.imgUrl} onChange={props.handleChange} placeholder="img URL"/>
                <input type="text" name="description" value={props.description} onChange={props.handleChange} placeholder="Description"/>
                <button>{props.btnText}</button>
            </form>
        </div>
    )
}

export default Form