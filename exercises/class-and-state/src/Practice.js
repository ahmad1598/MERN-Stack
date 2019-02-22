import React from 'react'

class Practice extends React.Component {
    constructor(){
        super()
        this.state = {
            counter: 0
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick = {this.handleClick}> + </button>
            </div>
        )
    }
}

export default Practice