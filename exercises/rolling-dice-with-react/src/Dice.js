import React from 'react'

const Dice = (props) => {
    
    return(
        <div className={`number` + props.state}>
            <p style={{display:"none"}}>{props.state}</p>
        </div>
    )
}

export default Dice