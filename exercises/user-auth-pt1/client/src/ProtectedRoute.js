import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {withUser} from './context/UserProvider.js'

const ProtectedRoute = props => {
    //below we are renaming component to Component by :
    //...rest means we can pass any other props later on
    const {path, redirectTo, component: Component , ...rest} = props
    return(
        props.token
            ?
    <Route path={path} render = {rProps => <Component {...rProps} {...rest} /> } />
            :
            <Redirect to={redirectTo} />
    )
}

export default withUser(ProtectedRoute)