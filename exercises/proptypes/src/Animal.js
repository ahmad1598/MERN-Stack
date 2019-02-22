import React from 'react'
import propTypes from 'prop-types'

const Animal = (props) => {
    return (
        <div>
            <h1>Type: {props.type}</h1>
            <h3>Sound it Makes: {props.sound}</h3>
            <p>Coat: {props.coat}</p>
            <p>Legs: {props.legs}</p>
            <p>Diet: {props.diet}</p>
        </div>
    )
}

//to define what data type our props want to be
Animal.propTypes = {
    // you can define type of it and also you can make it require
    type: propTypes.string.isRequired,
    legs: propTypes.number,
    coat: propTypes.string,
    sound: propTypes.string,
    diet: propTypes.string

}

export default Animal



// for each individual component we can have seperate propTypes and 
// give some type and other things to them.
//if we have PropType for each indivisual component, it wil save
//alot of time for checking and test our code because it will already 
//checking data types for us