import React from 'react'
import {withUser} from '../context/UserProvider.js'
const ShowAlert = () => {

    
    return(
        <div className="container noUser" >
            <div className="row card-panel noUser">
                <div className="col s8">
                    User not Found 
                </div>  
            </div>
        </div>
    )
}


export default withUser(ShowAlert)