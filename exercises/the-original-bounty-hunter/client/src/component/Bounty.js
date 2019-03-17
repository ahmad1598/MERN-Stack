import React,{Component} from 'react'
import AddBounty from './AddBounty.js'
class Bounty extends Component {
    constructor(props){
        super(props)
        this.state = {
            editToggle: false,
            firstName:props.firstName,
            lastName: props.lastName,
            isLiving: props.isLiving,
            bountAmount: props.bountAmount,
            type: props.type
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            editToggle : !prevState.editToggle
        }))
    }

    handleChange = e => {
        // const {name, type} = e.target
        const value = e.target.type === "checkbox" ? e.target.checked:
                        e.target.value
        this.setState(({
            [e.target.name]: value
        }))
    }

    handleSubmit = e => {
        e.preventDefault()
        const bountyUpdate = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            isLiving: this.state.isLiving,
            bountAmount: this.state.bountAmount,
            type: this.state.type
        }
        this.props.updateBounty(this.props._id,bountyUpdate)
        this.toggler()
    }
    
    render(){
        const {firstName,lastName,isLiving,bountAmount,type,deleteBounty,_id} = this.props
        return(
            <div className="col s6 hoverable">
                <div className={`card ${type === "Jedi" ? "jedi" : "sith"} darken-1`}>
                    {
                        !this.state.editToggle ?
                            <>
                                <div class="card-content white-text">
                                    <span className="card-title">{firstName}</span>
                                    <p>{lastName}</p>
                                    <div className="deleteEdit">
                                        <a href="#" onClick={() => deleteBounty(_id)} className="btn-floating btn-small pink accent-4"><i className="material-icons">delete</i></a>
                                        <a href="#" onClick={this.toggler} className="btn-floating btn-small blue darken-3"><i className="material-icons">edit</i></a>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <AddBounty
                                    handleChange = {this.handleChange}
                                    handleSubmit = {this.handleSubmit}
                                    btnText = "Submit Edit"    
                                    {...this.state}
                                />
                                <a href="#" onClick={this.toggler} className="btn-floating btn-small blue darken-3"><i className="material-icons">close</i></a>
                            </>
                    }
                </div>
            
            </div>

        

)
    }
}

export default Bounty

