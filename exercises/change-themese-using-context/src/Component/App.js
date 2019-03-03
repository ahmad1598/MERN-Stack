import React from 'react'
import '../Styles/style.css'
import Navbar from './Navbar.js'
import Services from './Services'
import Contact from './Contact'
import {Switch, Route} from 'react-router-dom'
import {withTheme} from '../context/ThemeProvider.js'
const App = (props) =>{
        return(
                <div className={`home-${props.theme}`}>
                <Navbar /> 
                <Switch>
                    <Route exact path="/"/>
                    <Route path="/services" component={Services}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </div>
        )
    
}

export default withTheme(App)