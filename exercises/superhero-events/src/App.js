/* eslint-disable no-useless-constructor */
import React from 'react'
import data from './superHeroes.json'
import SuperHero from './SuperHero.js'
import './style.css'
class App extends React.Component{
    
    constructor(){
        super()
    }

    render(){
        const superHeroes = data.superHeroes.map((hero,i) =>
                           <SuperHero 
                            name={hero.name} 
                            img={hero.imgUrl} key={i}
                            onClick = {() => {
                                alert(hero.Catchphrase)
                            }}
                            />
                             )

        return (
            <div className="container" >
                {superHeroes}
            </div>
        )
    }
}
export default App