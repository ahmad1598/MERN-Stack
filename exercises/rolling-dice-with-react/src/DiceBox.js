import React from 'react'
import Dice from './Dice.js'
import DiceButton from './DiceButton.js';
import Die from './Die.js'
import './style.css'
class DiceBox extends React.Component{
    
    constructor(){
        super()
        this.state = {
            randomNumber1:this.randomGenerator(),
            randomNumber2:this.randomGenerator(),
            randomNumber3:this.randomGenerator(),
            randomNumber4:this.randomGenerator(),
            randomNumber5:this.randomGenerator(),
            dieNumber: this.randomGenerator()
        }
    }
    
    randomGenerator = () => {
        return Math.floor(Math.random() * 6 + 1)
    }
    
    newNumber = () => {
        
        this.setState ({
            randomNumber1:this.randomGenerator(),
            randomNumber2:this.randomGenerator(),
            randomNumber3:this.randomGenerator(),
            randomNumber4:this.randomGenerator(),
            randomNumber5:this.randomGenerator()
        })
        // // let isEqual = this.btnClicked();
        // console.log(this.btnClicked())
    }

    dieGenerator = () => {
        this.setState({
            dieNumber:this.randomGenerator()
        })
    }

    //cehcking if the user clicked number is equal to die Number
     btnClicked = (e) => {
         if(this.state.dieNumber == e.target.textContent){
            let mathces = e.target
         }
         
        //  console.log('clicked')
        // return (this.state.dieNumber == e.target.textContent)
    }


    render(){
        return(
            <div className = "container">
                <div className="diceContainer" onClick = {this.btnClicked}>
                    <Dice state = {this.state.randomNumber1}/>
                    <Dice state = {this.state.randomNumber2}/>
                    <Dice state = {this.state.randomNumber3}/>
                    <Dice state = {this.state.randomNumber4}/>
                    <Dice state = {this.state.randomNumber5}/>
                </div>
            
                <DiceButton onClick = {this.newNumber}/>

                <Die dieNumber = {this.dieGenerator} state = {this.state}/>
            </div>
        )
    }
}

export default DiceBox