import React from 'react'
import propTypes from 'prop-types'

let dollar ='';
let color = '';
const Cards = (props) => {
     
    if(props.price < 500){
        dollar = '$';
    } else if(props.price < 1000 ){
        dollar = '$$';
    } else {
        dollar = '$$$'
    }


    if(props.timeToGo === "Spring"){
        color = "#3fc380";
    } else if(props.timeToGo === "Winter"){
        color = "#e4f1fe";
    } else if(props.timeToGo === "Fall"){
        color = "#f7ca18";
    } else if(props.timeToGo === "Summer"){
        color = "#d35400";
    }

    return (
        <div>
            <div style={{backgroundColor: color}} className="card">
                <h2>Place: {props.place}</h2>
                <h4>Price: ${props.price}</h4>
                <p>Time To Go: {props.timeToGo}</p>
                <h1 className="dollar">{dollar}</h1>
            </div>
            <div>
                
            </div>

        </div>
    )
}

export default Cards


Cards.propTypes = {
    color:propTypes.string,
    place: propTypes.number,
    timeToGo: propTypes.string
}