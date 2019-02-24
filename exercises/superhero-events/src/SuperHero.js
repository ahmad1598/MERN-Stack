import React from 'react'

const SuperHero = props => {
    return(
        <div onClick = {props.onClick}>
            <div className="heroTitle" >
                <h1>{props.name}</h1>
            </div>
            <div className="hero">
                <img src={props.img} alt = {props.name}/>
            </div>
        </div>
    )
}

export default SuperHero