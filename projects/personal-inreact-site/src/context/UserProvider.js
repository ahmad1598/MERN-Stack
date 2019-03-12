import React,{Component} from 'react'
import axios from 'axios'
const id = process.env.REACT_APP_CLIENT_ID
const secret = process.env.REACT_APP_CLIENT_SECRET

const UserContext = React.createContext()
class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            repos_count : 5,
            repos_sort: 'created:asc',
            user: "",
            profileResponse:{},
            profile: "",
            reposCount:5,
            reposResponse:[],
            contact: []
        }
    }

    handleChange = e => {
        this.setState({
            user : e.target.value
        }, () =>  this.getUser()
        )       
    }

    getUser = async () => {
        const user = this.state.user
        const url = `https://api.github.com/users/${user}?client_id=${id}&client_secret=${secret}`
        try{
            const userResponse = await axios.get(url)
                this.setState(({ profileResponse: userResponse.data }))
                this.getRepos()
        } catch{
            alert('User not Found')
        }

    }

    getRepos = () => {
        const user = this.state.user
        const url = `https://api.github.com/users/${user}/repos?per_page=${this.state.reposCount}`
        axios.get(url).then(response => {
            this.setState(({reposResponse: response.data}))
        })
    }

    addContact = (inputs) => {
        const { title, description, price, imgUrl } = inputs
        const newContact = { title, description, price, imgUrl }

        axios.post("https://api.vschool.io/ahmad/todo", newContact).then(response => {
            this.setState(prevState => {
                return {
                    contact: [response.data, ...prevState.contact]
                }
            })
        }).catch(error => console.log(error))
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log('clicked');

    }

    render(){
        const props = {
            profileResponse: this.state.profileResponse,
            reposResponse: this.state.reposResponse,
            user: this.state.user,
            profile: this.state.profile,
            handleChange: this.handleChange,
            getUser: this.getUser,
            getRepos: this.getRepos,
            handleSubmit: this.handleSubmit,
            contact: this.state.contact,
            addContact:this.addContact
        }

        return(
            <UserContext.Provider value={props}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}


export const withUser = C => props => (
    <UserContext.Consumer>
        {value => <C {...props} {...value} />}
    </UserContext.Consumer>
)

export default UserProvider