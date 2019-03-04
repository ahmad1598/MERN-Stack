import React from 'react'
import Toggle from './Toggle.js'
import Button from './Button.js';

const App = (props) => {
        return(
            <div>
                <Button />
            </div>
            // <div>
                
            //     {/* Nested Toggled must have props renamed so they do not conflict */}
            //     <Toggle render = {({isToggled,toggler}) => 
                
            //     // as we can see here, if we want to have another toggler and isToggled, 
            //     //inside our destructuring we can change props names which we did below
            //     //now we have two Toggle with different props name
            //         <Toggle render = {({isToggled:fanIsToggled, toggler:fanToggler}) => 
            //         <>
                        
            //             <h1>The light is {isToggled ? "On" : "Off"}</h1>
            //             <button onClick={toggler}>Turn {!isToggled ? "On" : "Off"} light </button>
            //             <h1>The light is {fanIsToggled ? "On" : "Off"}</h1>
            //             <button onClick={fanToggler}>Turn {!fanIsToggled ? "On" : "Off"} light </button>
            //         </>
            //     }/>
            // }/> 
            //     {/* Single Toggle */}
            // <Toggle render = {({isToggled,toggler}) =>
            //     <>
            //         <h1>The light is {isToggled ? "On" : "Off"}</h1>
            //         <button onClick={toggler}>Turn {!isToggled ? "On" : "Off"} light </button>
            //     </>
            // }/>
                    
            // </div>
        )   
}


export default App