import React from 'react'

const Buttons = (props) => {
    return (
        <div className = "btnStyle">
            <button onClick = {props.topLeftCorner} className = "buttonStyle">Top Left Corner</button>
            <button onClick = {props.topMiddle} className = "buttonStyle">Top Middle</button>
            <button onClick = {props.topRightCorner} className = "buttonStyle">Top Right Corner</button>
            <button onClick = {props.bottomHalf} className = "buttonStyle">Bottom Hlaf</button>
            <button onClick = {props.blackWhite} className = "buttonStyle">Black & White</button>
            <button onClick = {props.borderRadius} className = "buttonStyle">Change Radius</button>
            <button onClick = {props.changeAll} className = "buttonStyle">Change All</button>
        </div>
    )
}


export default Buttons