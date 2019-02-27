import React from 'react'
import axios from 'axios'
import './style.css'
import Header from './Header';


class App extends React.Component{
    constructor(){
        super()
        this.state = {
            hitList: []

        }
    }

    componentDidMount(){
        axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then(response => {
            console.log(response.data)    
        this.setState({
                hitList:response.data
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render(){
            const mappedHitLit = this.state.hitList.map(item => {
                return(
                    <div style={{backgroundImage:`url(${item.image})`}}>
                        <h1>{item.name}</h1>
                    </div>
                )
            })
        return(
            <div>
                <div>
                    <Header />
                </div>
                <div className="dataContainer">
                    {mappedHitLit}
                </div>
                
                
            </div>
        )
    }
}


export default App