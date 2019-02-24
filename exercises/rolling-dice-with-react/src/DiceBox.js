import React from 'react'
import Dice from './Dice.js'
import DiceButton from './DiceButton.js';
import './style.css'
class DiceBox extends React.Component{
    
    constructor(){
        super()
        let arrImage = [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dice-2.svg/1024px-Dice-2.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dice-4.svg/600px-Dice-4.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/0/09/Dice-1.svg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dice-3.svg/600px-Dice-3.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/557px-Dice-5.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dice-6.svg/557px-Dice-6.svg.png']

        this.state = {
            randomNumber1: arrImage[Math.floor(Math.random() * arrImage.length)],
            randomNumber2: arrImage[Math.floor(Math.random() * arrImage.length)],
            randomNumber3: arrImage[Math.floor(Math.random() * arrImage.length)],
            randomNumber4: arrImage[Math.floor(Math.random() * arrImage.length)],
            randomNumber5: arrImage[Math.floor(Math.random() * arrImage.length)],
            randomNumber6: arrImage[Math.floor(Math.random() * arrImage.length)]
        }
    }
    
    randomGenerator = () => {
        let arrImage = [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dice-2.svg/1024px-Dice-2.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dice-4.svg/600px-Dice-4.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/0/09/Dice-1.svg',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dice-3.svg/600px-Dice-3.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/557px-Dice-5.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dice-6.svg/557px-Dice-6.svg.png']
        this.setState({
                randomNumber1: arrImage[Math.floor(Math.random() * arrImage.length)],
                randomNumber2: arrImage[Math.floor(Math.random() * arrImage.length)],
                randomNumber3: arrImage[Math.floor(Math.random() * arrImage.length)],
                randomNumber4: arrImage[Math.floor(Math.random() * arrImage.length)],
                randomNumber5: arrImage[Math.floor(Math.random() * arrImage.length)],
                randomNumber6: arrImage[Math.floor(Math.random() * arrImage.length)]
        })
    }
    render(){
        return(
            <div>
                <Dice state = {this.state}/>
                <DiceButton onClick = {this.randomGenerator}/>
            </div>
        )
    }
}

export default DiceBox