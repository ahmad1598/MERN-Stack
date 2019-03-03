import React from 'react'
import '../Styles/style.css'
import Navbar from './Navbar.js'
import Services from './Services'
import Contact from './Contact'
import Home from './Home'
import {Switch, Route} from 'react-router-dom'
import {withTheme} from '../context/ThemeProvider.js'
const App = (props) =>{
        return(
                <div className={`container-${props.theme}`}>
                
                <Navbar /> 
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route path="/services" component={Services}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </div>
        )
    
}

export default withTheme(App)