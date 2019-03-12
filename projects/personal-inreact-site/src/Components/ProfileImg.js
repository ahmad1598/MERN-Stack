import React from 'react'
import {withUser} from '../context/UserProvider.js'

const ProfileImg = (props) => {
    const {profileResponse} = props
    return (
        <>
            <img className="z-depth-2 responsive-img circle" src={`${profileResponse.avatar_url}`} alt=""/>
            <a className="btn blue darken-3 btn-block">{profileResponse.name}</a>
            <a href={`${profileResponse.html_url}`} target="_blank" rel="noopener noreferrer" className="btn black btn-block waves-light mb-4 center-align viewProfile">View Profile</a>
        </>

    )
}

export default withUser(ProfileImg)