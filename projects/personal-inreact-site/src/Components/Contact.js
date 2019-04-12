import React,{Component} from 'react'
import axios from 'axios'
import {withUser} from '../context/UserProvider.js'

class Contact extends Component{
    constructor(){
        super()
        this.state = {
            title:"",
            description:"",
            phone: "",
            email: "",
            message:""
        }
    }
    
    handleChange = (e) => {
        const { name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.title === "" || this.state.description === "" || this.state.phone === "" || this.state.email === "" || this.state.message === ""){
            alert('Please fill out the form first... thank you')
        }else{

            this.props.addContact(this.state)
            this.setState({
                title:'',
                description:'',
                phone: '',
                email: '',
                message:''
            })
            console.log('thank you for contacting us')
            alert('Thanks for contacting us! We will be in touch with you shortly.')
        }
    }

    render(){
        const url = "https://lh3.googleusercontent.com/JDP8J1g0qhHODlZMFYxDTU6N-KwSp_NnrI0l0HLik46q6o_WbAc4MwY1FVceZR7T7OGOi4soYJArJqVVNphz1Iwv24PhOxIcd0_mQgh8vbS5xkfek-z3HLaTgtxRV4NXbXmT9wumocMvYdLkIjm3uz5Jvzyg1MN5aL1vgDT4VrGLyxB4SUPfWyvn36WI3stptrBE10bVxk7kBgP57WInejTQlUyyTWssIu2GNBz5zyICwe0UcPa9nBj4IofBJMAIjtMvORxSOBrTQeU-WW00lI1QwiwE_S6iDRL8ER0qgIfo6YXsvB7IRYCajgskQG_xIkds2eAMokHwY-lhVD9QjUzd9cgGHz4SLJ-Ahf2dPd_jrTPuGGU7ldpFD8iQ1X_w6L-RBESvHj_JnEUN_wjwnZG9q_BTjLTkEW4TbUIFxGPRB0Ju2MLSApZWxwr1nkqrH_lI90dPXT2Dltc07pYR5H5275W0eKUD1IFeJyRXPi_c7G2CGoim86-nQov0se1xu-dVDfmpfdyKn8abXCes1tpWtQtqnYtF2oORRRQwxCQE5rlv_2Q4pg2TMdG3zN2OG3ZP5V7GP5yFThIHCDZ9aj4Jp0Kih7zRRoykNwWBSPpcYPHhXiKQpIYhs388uX29wsZQA0sXj38tOjO5JP_YtusAzFPYcE8=w972-h1596-no"
        return (
            <div className="container z-depth-4 contactContainer">
            <div className="row">
                <div className="col s4">
                    <img className="z-depth-2 responsive-img  contactImg" src={url} alt=""/>
                    <a className="btn contactNameBtn btn-block">Ahmad Rasoulpour</a> 
                    <a className="btn blue darken-1 btn-block portfolioBtn" href="https://docs.google.com/document/d/1tZ3LqudwpvPvtcWpLD698m7PgI7qNJvs67iojbmSWYU/edit?usp=sharing" target="_blank">Resume</a> 
                </div>
                <br/><br/>
                <div className="col s8">
                    <div className="row">
                        <div className="container">
                            <p>
                                <a href="mailto: ahmad.raman83@yahoo.com" className="btn-floating btn-flat waves-effect waves-light light-blue darken-3"><i className="fa fa-envelope"></i></a>
                                <a href="mailto: ahmad.raman83@yahoo.com" className="black-text" > ahmad.raman83@yahoo.com</a>
                            </p>
                            <br/>
                            <hr/>
                            <br/>
                            <p>
                                <a href="https://github.com/ahmad1598" className="btn-floating btn-flat waves-effect waves-light light-blue darken-3"><i className="fab fa-github"></i></a>
                                <a href="https://github.com/ahmad1598" className="black-text"> github.com/ahmad1598 </a>
                            </p>
                            <br/>
                            <hr/>
                            <br/>
                            <p>
                                <a href="https://www.linkedin.com/in/ahmad-rasoulpour/" className="btn-floating btn-flat waves-effect waves-light light-blue darken-3"><i className="fab fa-linkedin"></i></a>
                                <a href="https://www.linkedin.com/in/ahmad-rasoulpour/" className="black-text"> linkedin.com/in/ahmad-rasoulpour </a>
                            </p>
                            <br/>
                            <hr/>
                            <br/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        )
}
}

export default withUser(Contact)