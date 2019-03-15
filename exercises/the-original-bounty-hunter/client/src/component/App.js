import React,{Component} from 'react'
import {withBounties} from '../context/BountyProvider.js'
// import Bounty from './Bounty';
import BountiesList from './BountiesList.js';

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName:'', 
            lastName:'',
            living:'', 
            bountyAmount:'',
            type:''
        }
    }
    componentDidMount(){
        this.props.getBounties()
    }
    
    handleChange = e => {
        
    }

    render(){
        return(
            <div>
                

                <BountiesList 
                    bounties = {this.props.bounties}
                    handleDelete ={this.props.handleDelete}
                    />
            </div>
        )

    }
}

export default withBounties(App)