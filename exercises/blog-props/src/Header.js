import React from 'react'
import Navbar from './Navbar.js'
const Header = () => {
    return (    
        <div>
            <div>
                <Navbar />
            </div>
            <div className="header">
                <div className="headerColor"></div>
                <h1 className="headerH1">Clean Blog</h1>
                <span className="subHeader">A Blog Theme by Start Bootstrap</span>
            </div>
            
        </div>
        
    )
}


export default Header