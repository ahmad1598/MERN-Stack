import React from 'react'

const Die = (props) => {
    const dieNumber = props.state.dieNumber
    return (
        <div className="dieContainer">
            {/* <div style = {{backgroundImage: `url(${dieNumber})`,backgroundSize:"cover"}}></div> */}
            <div className = {"number" + dieNumber}>
                <p style={{display:"none"}}>{dieNumber}</p>
            </div>
        </div>
    )
}

export default Die




// Make it so the dice can be 'selected', which means the number of the selected die doesn't change when you click the button the generate new numbers.  
// Then build it so all the die reset every 3rd roll, which would make all numbers reset and be de-selected



//I need to show a random dice number on screen -> I got this one working

//I need to make dice clickable   -> I got this one working

//and check and determine the equality of a random number with the number on the screen -> I got this one working

//the matches number/numbers on the screen won't change because of the new random number that showed up on the screen. I mean the user won't be able to change it by pressing button
// after 3 time that user press button, you need to reset all the numbers and show a new random number