import React from 'react'
import Bounty from './Bounty.js'
const BountiesList = (props) => {
    return(
        <div>
            {
                props.bounties.map(bounty => <Bounty 
                                                deleteBounty = {props.deleteBounty}
                                                updateBounty = {props.updateBounty}
                                                {...bounty}
                                                key={bounty._id}
                                                />)
            }
        </div>
    )
}



export default BountiesList
