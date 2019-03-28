import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Auth.js'
import {withUser} from './context/UserProvider.js'
import PostList from './PostList.js'

class App extends Component {

    render(){
        const {token, logout} = this.props
        return(
            <div>
                {token && <button onClick={logout}>Logout</button>}
                <Switch>
                    {/* here we are saying that my home route "/" loads Auth component */}
                    {/* we are using render here which provide us a routerProps (rProps) and we are spread them to the Auth component */}
                    {/* if we were using component instead of render, routerProps will be passing be default but because we are using render here we have to pass rProps as a function manualy to our Auth component */}
                    {/* and we are using render because we don't want to user put some url in address bar and go to that specific page without login  */}
                    {/* by using render we will be able to ask question to see if the user login then direct them to that page otherwise redirect to login page */}
                    <Route exact path="/" render ={rProps => <Auth {...rProps} /> } />
                    {/* here we are saying that my posts route "/posts" loads PostList component */}
                    <Route path="/posts" render ={rProps => <PostList {...rProps} /> } />
                </Switch>
            </div>
        )
    }
}

export default withUser(App)


//Routing
    // front-end routing
        // which url loads which component
        //front end routes, always will be in the Switch statements
    //back-end routing
        // request to /api/posts will get me posts data
        //back end routes will be inside the back end routes folder
        