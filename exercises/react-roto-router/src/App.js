import React from 'react'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Services from './Services'
import './style.css'
import { Switch, Route } from 'react-router-dom'
const App = () => {
    return(
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component = {Home}/>
                <Route path = "/about" component = {About}/>
                <Route path = "/services" component = {Services}/>
            </Switch>
        </div>


    )
}


export default App