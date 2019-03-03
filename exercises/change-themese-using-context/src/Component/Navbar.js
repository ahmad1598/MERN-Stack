import React from 'react'
import {Link} from 'react-router-dom'
import { withTheme } from '../context/ThemeProvider';

const Navbar = (props) => {
    return(
        <div>
            <div className= {`nav-${props.theme}`}>
                <div className={`nav-menu-${props.theme}`}>
                    <Link to="/">HOME</Link>
                    <Link to="/services">SERVICES</Link>
                    <Link to ="/contact">CONTACT</Link>
                </div>
                <div className={`navInfo-${props.theme}`}>
                    <p></p>
                    <h3>
                        During these art works, I tried to use the letters and the 
                        line as a visual element alongside the role and color of the
                        painting board and used the line as a pictorial portraiture
                        of painting art.
                    </h3>
                </div>
                <div>
                    <button className={`btn-${props.theme}`} onClick={props.toggleTheme}>Change Theme to {props.theme === "light" ? "dark" : "light"}</button>
                </div>
            </div>
            
        </div>
    )
}

export default withTheme(Navbar)