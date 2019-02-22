import React from 'react'


const Pet = (props) => {
    return(
        <li>
            Name: {props.name}
            Breed: {props.breed}
        </li>
    )
}


export default Pet