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
        axios.get('/bounties').then(res => {
            this.setState({
                bounties:res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    addBounty = (newBounty) => {
        axios.post("/bounties",newBounty).then(res => {
            this.setState(pervState => ({
                bounties: [...pervState.bounties, res.data]
            }))
        })
    }


    deleteBounty = (_id) => {
        const boun = this.state.bounties.find(bounty => bounty._id === _id)
        const answer = prompt(`Are you sure you want to delete ${boun.firstName}? (yes / no)`)
        if(answer === "yes"){
            axios.delete(`/bounties/${_id}`).then(res => {
                this.setState(pervState => ({
                    bounties: pervState.bounties.filter(bounty => bounty._id !== _id)
                }))
            })
        } else{
            alert("Ok")
        }
    }

    updateBounty = (_id,update) => {
        axios.put(`/bounties/${_id}`,update).then(res => {
            this.setState(pervState => ({
                bounties: pervState.bounties.map(bounty => bounty._id === _id ? res.data : bounty)
            }))
        })
    }

     render(){
        return(
            <BountyContext.Provider 
                value={{
                    bounties:this.state.bounties,
                    getBounties: this.getBounties,
                    addBounty: this.addBounty,
                    deleteBounty: this.deleteBounty,
                    updateBounty: this.updateBounty
                }}>
                {this.props.children}
            </BountyContext.Provider>
        )
     }
}

export default BountyProvider

export const withBounties = C => props => (
    <BountyContext.Consumer>
        {value => <C {...props} {...value} /> }
    </BountyContext.Consumer>
)
