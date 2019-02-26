import React from 'react'
import Form from './Form'
import './style.css'

class App extends React.Component{
    constructor(){
        super()
        this.state ={
            firstName:"",
            lastName:"",
            email:"",
            placeOfBirth:"",
            phone:"",
            favFood:"",
            bio:"",
            infoArr: []
        }
    }

    randomColor = () => {
        return Math.floor(Math.random() * 256);
    }

    handleChange = (e) => {
        const {value,name} = e.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const infoObj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            placeOfBirth: this.state.placeOfBirth,
            phone: this.state.phone,
            favFood: this.state.favFood,
            bio: this.state.bio,
        }
        

      if(!this.state.firstName || this.state.firstName.length < 2 || !this.state.lastName || this.state.lastName.length < 2 || 
         !this.state.email || this.state.email.length < 2 || !this.state.placeOfBirth ||  this.state.placeOfBirth.length < 2 || 
         !this.state.phone || this.state.phone.length < 10 || !this.state.favFood || this.state.favFood.length < 2 || 
         !this.state.bio || this.state.bio.length < 2) {
        alert(`
                                       🚫                          
                            Please Try Again. 
                            All the Fields should
                            be at Least 3 Character.
                            You May Have Empty Fields
                            Or Fields With Less Than 3 Character.
                            YOU CAN TRY AGAIN IF YOU WANT..🙂 

        `)
      } else {
            if (!Number(this.state.phone)){
                alert(`
                                        🚫
                        Please Enter Valid phone number 
                        (no dashes or special characters)
                        (must look like this  9757653323)`)
        } else{

        this.setState(prevState => {
            return{
                infoArr: [...prevState.infoArr, infoObj],
                firstName:"",
                lastName:"",
                email:"",
                placeOfBirth:"",
                phone:"",
                favFood:"",
                bio:""
            }
        })
    }
    }

    }
    

    render(){
        return(
            <div>
                <h1 className="title">React Name Badge</h1>
                <Form state = {this.state} handleSubmit = {this.handleSubmit} handleChange = {this.handleChange}/>
            </div>
        )
    }
}

export default App