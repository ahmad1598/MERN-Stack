import React from 'react'
import Box from './Box.js'
import './style.css'
import Buttons from './Buttons.js';
import BtnSounds from './BtnSounds.js'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            color1:'red',
            color2:'blue',
            color3:'green',
            color4:'purple',
            color5: 'gray',
            color6: 'Pink',
            borderRadius:5
        }
    }

    handleChangeTopLeftCorner = () => {
        let R = Math.floor(Math.random() * 256)
        let G = Math.floor(Math.random() * 256)
        let B = Math.floor(Math.random() * 256)
        this.setState({
            color1: `rgb(${R}, ${G}, ${B})`
        })
    }
    handleChangeTopMiddle = () => {
        let R = Math.floor(Math.random() * 256)
        let G = Math.floor(Math.random() * 256)
        let B = Math.floor(Math.random() * 256)
        
        this.setState({
            color2: `rgb(${R}, ${G}, ${B})`
        })
    }
    handleChangeTopRightCorner = () => {
        let R = Math.floor(Math.random() * 256)
        let G = Math.floor(Math.random() * 256)
        let B = Math.floor(Math.random() * 256)
        this.setState({
            color3: `rgb(${R}, ${G}, ${B})`
        })
    }
    handleChangeBottomHalf = () => {
        let R = Math.floor(Math.random() * 256)
        let G = Math.floor(Math.random() * 256)
        let B = Math.floor(Math.random() * 256)
        this.setState({
            color4: `rgb(${R}, ${G}, ${B})`,
            color5: `rgb(${R}, ${G}, ${B})`,
            color6: `rgb(${R}, ${G}, ${B})`
        })
    }

    handleChangeBlackWhite = () => {
        const colorArr = ['white','black'];
        let colorRandom = colorArr[Math.floor(Math.random() * colorArr.length)]
        this.setState({
            color1: colorRandom,
            color2: colorRandom,
            color3: colorRandom,
            color4: colorRandom,
            color5: colorRandom,
            color6: colorRandom
        })
    }

    handleBorderRadius = () => {
        this.setState(prevState => {
            return {
                borderRadius: prevState.borderRadius === 5 ? 100 : 5
            }
        })
    }

    handleChangeAll = () => {
        let R = Math.floor(Math.random() * 256)
        let G = Math.floor(Math.random() * 256)
        let B = Math.floor(Math.random() * 256)
        this.setState({
            color1: `rgb(${R}, ${G}, ${B})`,
            color2: `rgb(${R}, ${G}, ${B})`,
            color3: `rgb(${R}, ${G}, ${B})`,
            color4: `rgb(${R}, ${G}, ${B})`,
            color5: `rgb(${R}, ${G}, ${B})`,
            color6: `rgb(${R}, ${G}, ${B})`
        })
    }


    
    render(){
        return(
            <div>
                <Box state = {this.state} />
                    <Buttons topLeftCorner = {this.handleChangeTopLeftCorner} 
                            topMiddle = {this.handleChangeTopMiddle} 
                            topRightCorner = {this.handleChangeTopRightCorner}
                            bottomHalf = {this.handleChangeBottomHalf} 
                            blackWhite = {this.handleChangeBlackWhite} 
                            borderRadius = {this.handleBorderRadius}
                            changeAll = {this.handleChangeAll} />
                
            </div>
        )
    }

}

export default App
