import React from 'react'

const Box = (props) => {



    const boxStyle1 = {
        backgroundColor: props.state.color1,
        borderRadius: props.state.borderRadius
        
    }
    const boxStyle2 = {
        backgroundColor: props.state.color2,
        borderRadius: props.state.borderRadius
        
    }
    const boxStyle3 = {
        backgroundColor: props.state.color3,
        borderRadius: props.state.borderRadius
        
    }
    const boxStyle4 = {
        backgroundColor: props.state.color4,
        borderRadius: props.state.borderRadius
        
    }
    const boxStyle5 = {
        backgroundColor: props.state.color5,
        borderRadius: props.state.borderRadius
        
    }
    const boxStyle6 = {
        backgroundColor: props.state.color6,
        borderRadius: props.state.borderRadius
        
    }

    return (
        <div className = "grid">
            <div className = "box" style ={boxStyle1}></div>
            <div className = "box" style ={boxStyle2}></div>
            <div className = "box" style ={boxStyle3}></div>
            <div className = "box" style ={boxStyle4}></div>
            <div className = "box" style ={boxStyle5}></div>
            <div className = "box" style ={boxStyle6}></div>
        </div>
    )
}

export default Box