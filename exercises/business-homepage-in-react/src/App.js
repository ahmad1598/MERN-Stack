import React from 'react'
import './style.css'
import Nav from './Nav'
import Info from './Info'
import Products from './Products'
import Images from './Images'
import Footer from './Footer'

function App(){
    return(
        <div>
            <Nav />
            <Info />
            <Products />
            <Images />
            <Footer />
        </div>
    )
}

export default App