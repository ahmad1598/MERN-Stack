import React from 'react'


const CounterControls = (props) => {
    return (
        <div>
                <button onClick = {props.handleIncrement}> + </button>
                <button onClick = {props.handleDecrement}> - </button>
                <div>
                    <button onClick = {props.handleMultiply}> * 2</button>
                </div>
        </div>
    )
}


export default CounterControls