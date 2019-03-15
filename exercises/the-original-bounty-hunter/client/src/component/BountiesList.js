import React from 'react'
import Bounty from './Bounty.js'
const BountiesList = (props) => {
    console.log(props)
    return(
        <div>
            {
                props.bounties.map( bounty => <Bounty 
                                                {...bounty}
                                                key={bounty._id}
                                                />)
            }
        </div>
    )
}



export default BountiesList
