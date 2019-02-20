import React from 'react'

function Box(props){
    return(
        <div style = {{backgroundColor: props.style}}>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <p>{props.information}</p>
        </div>
        
    )
}


export default Box