import React,{Component} from 'react'
import {withBounties} from '../context/BountyProvider.js'
import '../styles/styles.css'
import BountiesList from './BountiesList.js';
import AddBounty from './AddBounty.js';

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName:'', 
            lastName:'',
            isLiving:false, 
            bountyAmount:'',
            type:''
        }
    }

    componentDidMount(){
        this.props.getBounties()
    }

    
    handleChange = e => {
        const value = e.target.type === 'checkbox' 
            ? e.target.checked 
            : e.target.value;
        this.setState({
            [e.target.name]: value
        });
    }

    handleSubmit = e => {
        e.preventDefault()
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            isLiving: this.state.isLiving,
            bountyAmount: this.state.bountyAmount,
            type: this.state.type
        }
        this.props.addBounty(newBounty)
        this.setState({
            firstName:'', 
            lastName:'',
            isLiving:false, 
            bountyAmount:'',
            type:''
        })
    }

    render(){
        return(
            <div>
                <div className="header headerBg hoverable"></div>
                <AddBounty 
                    btnText = "ADD NEW BOUNTY"
                    {...this.state} 
                    handleChange={this.handleChange} 
                    handleSubmit ={this.handleSubmit}
                />

                <div className="container resultContainer">
                    <div className="row col s12">
                        <BountiesList 
                            bounties = {this.props.bounties}
                            deleteBounty ={this.props.deleteBounty}
                            updateBounty = {this.props.updateBounty}
                        />
                    </div>
                </div>
            </div>
        )

    }
}

export default withBounties(App)