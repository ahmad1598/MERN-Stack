import React from 'react'
import '../Style/style.css'
import Home from './Home.js'
import Navbar from './Navbar.js'
import Search from './Search.js'
import Contact from './Contact.js'
import {Switch, Route,withRouter} from 'react-router-dom'
import {withUser} from '../context/UserProvider.js'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const App = ({location}) => { 
        return(
            <div>
                <Navbar />
                <TransitionGroup className="transition-group">
                    <CSSTransition 
                        key={location.key}
                        timeout={{enter:300,exit:300}}
                        classNames={'fade'}
                    >
                        <section className="route-section">
                            <Switch location={location}>
                                <Route exact component={Home} path="/" />
                                <Route component={Search} path="/search" />
                                <Route component={Contact} path="/contact" />
                            </Switch>
                        </section>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    // }
}


export default withRouter(withUser(App))

