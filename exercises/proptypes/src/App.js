import React from 'react'
import Animal from './Animal.js'

const App = () => {
    return (
        <div>
            <Animal type="Lion" sound = "Raaaaaarwwww" legs={4} diet={Carnivore} />
        </div>
    )
}



export default App