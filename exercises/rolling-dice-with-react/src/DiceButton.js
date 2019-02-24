import React from 'react'

const DiceButton = (props) => {
    return (
        <div className="btnContainer">
            <button onClick = {props.onClick}>New Roll</button>
        </div>
    )
}

export default DiceButton