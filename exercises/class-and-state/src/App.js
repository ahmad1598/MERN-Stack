import React from 'react'
import CounterDisplay from './CounterDisplay.js'
import CounterControls from './CounterControls.js';
import './style.css'

class App extends React.Component{
    // only super() and this.state would be inside the constructor
    constructor(){
        super()
        this.state = {
            counter: 1
        }
    }
    handleIncrement = () => {
        // through setState and prevState we can change our state and also not change the orginal state
        // always remember not to change state directely
        //inside the function, if you want that function change your state, right after
        //creating function, you need to call this.setState and use the prevState to be able
        //to access to the previos state
        this.setState( prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    handleDecrement = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter - 1
            }
        })
    }

    handleMultiply = () => {
        this.setState (prevState => {
            return {
                counter: prevState.counter * 2
            }
        })
    }

    
    render(){
        return(
            <div>
                {/* remember this keyword only works on class */}
                {/* we can pass the state as a props to a new component */}
                {/* <h1>{this.state.counter}</h1> */}
                {/* <button onClick = {this.handleIncrement}> + </button> */}
                {/* if you want to add one more function like handleDecrement, all you need to pass that new function to the 
                CounterControls component and grab it from the other side */}
                {/* <CounterControls handleDecrement = {this.handleDecrement}/> */}
                {/* <form onSubmit = {}></form> */}

                <CounterDisplay counter = {this.state.counter} />
                <CounterControls handleIncrement = {this.handleIncrement} handleDecrement = {this.handleDecrement} handleMultiply ={this.handleMultiply}/>
            </div>
        )
    }
}



// const App = (props) => {
//     return (
//         <div>

//         </div>
//     )
// }


export default App