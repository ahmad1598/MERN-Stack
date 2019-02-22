import React from 'react'
import Pet from './Pet.js'

const Friend = (props) => {
    const friendsPet = props.pets.map((pet, i) => <Pet name = {pet.name} breed = {pet.breed} key = {i} />)
    return(
        <div className="friend">
            <h2>Hi, my name is {props.name} and I am {props.age} years old</h2>
            <div>
                <h4>These are {props.name}'s pets: </h4>
                <ul>
                    {friendsPet}
                </ul>
            </div>
        </div>
    )
}


export default Friend