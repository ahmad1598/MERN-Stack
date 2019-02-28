import React from 'react'
import axios from 'axios'
// import Color from './Color'
import './style.css'
class App extends React.Component{
    constructor(){
        super()
        this.state ={
            colors :''
        }
    }

    componentDidMount(){
        axios.get("http://www.colr.org/json/schemes/random/7?scheme_size_limit=5").then(response => {
            console.log(`#${response.data.schemes[2].colors[0]}`)
            this.setState({
                colors: `#${response.data.schemes[2].colors[0]}`
            })
        }).catch(error =>{
            console.log(error)
        })
    }

    render(){
        return(
            <div style = {{backgroundColor:this.state.colors}} className="container">
             
            </div>
        )
    }
}


export default App