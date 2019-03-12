import React from 'react'
import {withUser} from '../context/UserProvider.js'
const ProfileBtn = (props) => {
    const {profileResponse} = props
    return(
        <div className="card-panel repoBtn">
            <button className="btn blue ">Public Repos: {profileResponse.public_repos}</button> 
            <button className="btn blue ">Public Gists: {profileResponse.gists}</button>
            <button className="btn blue ">Followers: {profileResponse.followers}</button>
            <button className="btn blue ">Following: {profileResponse.following}</button>
        </div>
    )
}


export default withUser(ProfileBtn)