import React from 'react'
import ProfileBtn from './ProfileBtn.js'
import ProfileUL from './ProfileUL.js'
import ProfileImg from './ProfileImg.js'

const Profile = () => {
    return (
        <div className="container z-depth-4">
            <div className="row">
                <div className="col s4">
                    <ProfileImg />
                </div>

                <div className="col s8">
                    <ProfileBtn />
                    <br/>
                    <ProfileUL />
                </div>
            </div>
        </div>
    )
}

export default Profile


