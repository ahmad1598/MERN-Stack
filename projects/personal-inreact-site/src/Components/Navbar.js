import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="container hoverable ">
            <div className="col s12">
                <nav>
                    <li className="brand-logo"></li>
                    <div className="nav-wrapper right " >
                        <Link className="" to = "/" >HOME</Link>
                        <Link to = "/search">SEARCH</Link>
                        <Link to = "/contact">CONTACT</Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}


export default Navbar