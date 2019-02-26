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
            dieNumber: this.randomGenerator(),
            matches: 0
        }

    }
    
    
    randomGenerator = () => {
        return Math.floor(Math.random() * 6 + 1)
    }
    
    newNumber = () => {
        // if(this.mathces == this.dieNumber){
            // console.log(this.state.matches)
            // console.log(this.state.dieNumber)

            //here, use for loop to go over the entire state and check if the 
        //     // die number is equal to any on those number in state, if so, I want to update the other numbers that not equal to die number
        // let stateArr = [this.state.randomNumber1,this.state.randomNumber2,this.state.randomNumber3,this.state.randomNumber4,this.state.randomNumber5]
        // // console.log(stateValues)
        // for(let each of stateArr){
        //     if(each != this.state.matches){
        //         this.setState({
        //             each: this.randomGenerator()
        //         })
        //         //on here I can be able to console log those number that are not equal to die number
        //         console.log(each)
        //     }
        // }

        // if(this.state.matches == this.state.dieNumber){
            
        // }

        // }

        this.setState ({
            randomNumber1:this.randomGenerator(),
            randomNumber2:this.randomGenerator(),
            randomNumber3:this.randomGenerator(),
            randomNumber4:this.randomGenerator(),
            randomNumber5:this.randomGenerator()
        })
    }

    dieGenerator = () => {
        this.setState({
            dieNumber:this.randomGenerator()
        })
    }

    //cehcking if the user clicked number is equal to die Number
     btnClicked = (e) => {
        //  if(this.state.dieNumber == e.target.textContent){
        this.setState({
            matches: e.target.textContent
        })      
        
        //  }
         
        //  console.log('clicked')
        // return (this.state.dieNumber == e.target.textContent)
    }


    render(){
        return(
            
            <div className = "container">
                <h1 className="title">Yahtzee Dice</h1>
                <div className="diceContainer" onClick = {this.btnClicked}>
                    <Dice state = {this.state.randomNumber1}/>
                    <Dice state = {this.state.randomNumber2}/>
                    <Dice state = {this.state.randomNumber3}/>
                    <Dice state = {this.state.randomNumber4}/>
                    <Dice state = {this.state.randomNumber5}/>
                </div>
                <DiceButton onClick = {this.newNumber}/>
                {/* <Die dieNumber = {this.dieGenerator} state = {this.state}/> */}
            </div>
        )
    }
}

export default DiceBox