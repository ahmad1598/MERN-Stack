import React from 'react'
import {withUser} from '../context/UserProvider.js'

const ProfileUL = (props) => {
    const {profileResponse} = props
    return(
        <ul className="collection z-depth-1">
            <li className="collection-item white-text"> <strong className="black-text" ><i class="material-icons white-text">business </i> Company:</strong> {profileResponse.company ? profileResponse.company : " Not Available"}</li>
            <li className="collection-item white-text"><strong  className="black-text" ><i class="material-icons white-text">web </i> Website:</strong> {profileResponse.blog ? profileResponse.blog : " Not Available "}</li>
            <li className="collection-item white-text"><strong  className="black-text" ><i class="material-icons white-text">location_on</i> Location:</strong> {profileResponse.location ? profileResponse.location : " Not Available"}</li>
            <li className="collection-item white-text"><strong  className="black-text" ><i class="material-icons white-text">person_pin</i> Bio: </strong> {profileResponse.bio ? profileResponse.bio : " Not Available"}</li>
        </ul>
    )
}

export default withUser(ProfileUL)