import React,{Component} from 'react'
import axios from 'axios'
const BountyContext = React.createContext()

class BountyProvider extends Component{
    constructor(){
        super()
        this.state = {
            bounties : []
        }
    }

    getBounties = () => {
        axios.get('/bounty').then(res => {
            console.log(res.data)
            this.setState({
                
                bounties:res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    addBounties = (inputs) => {
        // const {firstName, lastName,living, bountyAmount,type,_id} = inputs

    }


    handleDelete = (_id) => {
        console.log(_id)
    }

    handleEdit = () => {

    }

     render(){
        return(
            <BountyContext.Provider 
                value={{
                    bounties:this.state.bounties,
                    getBounties: this.getBounties,
                    addBounties: this.addBounties,
                    handleDelete: this.handleDelete,
                    handleEdit: this.handleEdit
                }}>
                {this.props.children}
            </BountyContext.Provider>
        )
     }
}

export const withBounties = C => props => (
    <BountyContext.Consumer>
        {value => <C {...props} {...value} /> }
    </BountyContext.Consumer>
)

export default BountyProvider