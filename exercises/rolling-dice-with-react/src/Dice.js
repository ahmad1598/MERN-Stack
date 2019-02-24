import React from 'react'

const Dice = (props) => {

    const diceStyle = {
        backgroundImage1: props.state.randomNumber1,
        backgroundImage2: props.state.randomNumber2,
        backgroundImage3: props.state.randomNumber3,
        backgroundImage4: props.state.randomNumber4,
        backgroundImage5: props.state.randomNumber5,
        backgroundImage6: props.state.randomNumber6
    }
    return(
        <div className="container">
            <div style = {{backgroundImage: `url(${diceStyle.backgroundImage1})`,backgroundSize:"cover"}}></div>
            <div style = {{backgroundImage: `url(${diceStyle.backgroundImage2})`,backgroundSize:"cover"}}></div>
            <div style = {{backgroundImage: `url(${diceStyle.backgroundImage3})`,backgroundSize:"cover"}}></div>
            <div style = {{backgroundImage: `url(${diceStyle.backgroundImage4})`,backgroundSize:"cover"}}></div>
            <div style = {{backgroundImage: `url(${diceStyle.backgroundImage5})`,backgroundSize:"cover"}}></div>
            <div style = {{backgroundImage: `url(${diceStyle.backgroundImage6})`,backgroundSize:"cover"}}></div>
        </div>
    )
}

export default Dice