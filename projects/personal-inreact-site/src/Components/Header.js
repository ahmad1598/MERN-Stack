import React from 'react'
import {withUser} from '../context/UserProvider.js'
const Header = (props) => {
    const {user,handleChange,handSubmit} = props
    return (
        <div className="container searchContainer hoverable">
            <div className="search card-panel card-body">
                <h1 className="logo"> User Finder </h1>
                <i className="material-icons Medium">redo</i>
                <form onSubmit = {handSubmit}>
                
                <input className="form-control white-text" type="text" name="user" value={user} onChange = {handleChange} placeholder="GitHub Username..."/>
                
             
                </form>
            </div>
        </div>
    )
}

export default withUser(Header)