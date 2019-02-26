import React from 'react'
import DiceBox from './DiceBox'
import './style.css'
class App extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <div>
                <DiceBox />
            </div>
        )
    }
    
}

export default App