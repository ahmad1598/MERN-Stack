import React from 'react'
import './style.css'
class App extends React.Component{
    constructor(){
        super()
        this.state = {
            color1:'red',
            color2:'blue',
            color3:'green',
            color4:'purple',
            color5: 'black'

        }
    }

    handleChangeBtn1 = () => {
        let R = Math.floor(Math.random() * 256)
        let G = Math.floor(Math.random() * 256)
        let B = Math.floor(Math.random() * 256)
        
        this.setState({
            color1: `rgb(${R}, ${G}, ${B})`
        })
    }
    handleChangeBtn2 = () => {
        let R = Math.floor(Math.random() * 256)
        let G = Math.floor(Math.random() * 256)
        let B = Math.floor(Math.random() * 256)
        
        this.setState({
            color2: `rgb(${R}, ${G}, ${B})`
        })
    }
    handleChangeBtn3 = () => {
        let R = Math.floor(Math.random() * 256)
        let G = Math.floor(Math.random() * 256)
        let B = Math.floor(Math.random() * 256)
        this.setState({
            color3: `rgb(${R}, ${G}, ${B})`
        })
    }
    handleChangeBtn4 = () => {
        let R = Math.floor(Math.random() * 256)
        let G = Math.floor(Math.random() * 256)
        let B = Math.floor(Math.random() * 256)
        this.setState({
            color4: `rgb(${R}, ${G}, ${B})`
        })
    }

    handleChangeAll = () => {
        const colorArr = ['white','black'];
        let colorRandom = colorArr[Math.floor(Math.random() * colorArr.length)]
        this.setState({
            color1: colorRandom,
            color2: colorRandom,
            color3: colorRandom,
            color4: colorRandom,
            color5: colorRandom
        })
    }

    handleChangeBtn6 = () => {
        
    }


    
    render(){
        const boxStyle1 = {
            gridColumn:1,
            width: 200,
            height: 200,
            border: '1px solid black',
            display: 'flex',
            backgroundColor: this.state.color1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:'10px',
            justifySelf: 'center',
            
        }
        const boxStyle2 = {
            gridColumn:2,
            width: 200,
            height: 200,
            border: '1px solid black',
            display: 'flex',
            backgroundColor: this.state.color2,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:'10px',
            justifySelf: 'center',
            
        }
        const boxStyle3 = {
            gridColumn:3,
            width: 200,
            height: 200,
            border: '1px solid black',
            display: 'flex',
            backgroundColor: this.state.color3,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:'10px',
            justifySelf: 'center',
            
        }
        const boxStyle4 = {
            gridColumn:1,
            width: 200,
            height: 200,
            border: '1px solid black',
            display: 'flex',
            backgroundColor: this.state.color4,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:'10px',
            justifySelf: 'center',
            
        }
        const boxStyle5 = {
            gridColumn:2,
            gridRow: 2,
            width: 200,
            height: 200,
            border: '1px solid black',
            display: 'flex',
            backgroundColor: this.state.color4,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:'10px',
            justifySelf: 'center',
            
        }
        const boxStyle6 = {
            gridColumn:3,
            gridRow: 2,
            width: 200,
            height: 200,
            border: '1px solid black',
            display: 'flex',
            backgroundColor: this.state.color4,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:'10px',
            justifySelf: 'center',
            
        }
        
        

        return(
            <div>
                <div className = "grid">
                    <div style ={boxStyle1}></div>
                    <div style ={boxStyle2}></div>
                    <div style ={boxStyle3}></div>
                    <div style ={boxStyle4}></div>
                    <div style ={boxStyle5}></div>
                    <div style ={boxStyle6}></div>
                </div>
                <div className = "btnStyle">
                    <button onClick = {this.handleChangeBtn1} className = "buttonStyle">SQUARE - 1 </button>
                    <button onClick = {this.handleChangeBtn2} className = "buttonStyle">SQUARE - 2</button>
                    <button onClick = {this.handleChangeBtn3} className = "buttonStyle">SQUARE - 3</button>
                    <button onClick = {this.handleChangeBtn4} className = "buttonStyle">SQUARE - 4</button>
                    <button onClick = {this.handleChangeAll} className = "buttonStyle">CHANGE ALL</button>
                    <button onClick = {this.handleChangeBtn6} className = "buttonStyle">SQUARE - 4</button>
                    
                </div>
            </div>
        )
    }

}

export default App
