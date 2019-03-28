import React , {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const UserContext = React.createContext()
//here we are creating another instance of axios package and store it into dataAxios
const dataAxios = axios.create()


dataAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    
    config.headers.Authorization = `Bearer ${token}`
    return config
})
//wherever we're going to use dataAxios.something, before send the request,
//it will check localStorage, add it to the header, return it and send the request
// with this, token with be added in each request
//by doing that we are be able to add post and get all the post for each user


class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user:JSON.parse(localStorage.getItem("user")) || {},
            token:localStorage.getItem("token") ||  "",
            posts:[]
        }
    }

    signup = credentials => {
        axios.post("/auth/signup", credentials)
            .then(response => {
                const {user, token} = response.data
                // localStorage.setItem("user" , JSON.stringify(user))
                localStorage.user = JSON.stringify(user)
                localStorage.setItem("token", token)

                this.setState({
                    user, token
                    //this below callback function is running when the data came back and state has been updated. just to make sure that our data came back
                    // and direct user to the posts page. we assign posts route on app.js
                }, () => this.props.history.push("/posts"))
            }) 
            .catch( err => console.log(err.response.data.errMsg))
    }

    login = credentials => {
        axios.post("/auth/login", credentials)
            .then(response => {
                const {user, token} = response.data
                //localStorage will recieve object as a string, and we need to use JSON.stringify to change our object to string to be able to save in localStorage
                //and whenever we want to pull data from localStorage, we need to use parse to change it from string back to object
                localStorage.setItem("user" , JSON.stringify(user))
                localStorage.setItem("token", token)
                this.setState({ 
                    user, token
                }, () => this.props.history.push("/posts"))
            })
            .catch( err => console.log(err.response.data.errMsg))
    }

    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({
            user: {},
            token: "",
            posts: []
        })
    }

    addPost = newPost => {
        //because we want to add a post for specific user, we are using
        //dataAxios here which is go to dataAxios first and add a token to the header and then make a post request
        dataAxios.post("/api/posts" , newPost).then(response => {
            this.setState(prevState => ({
                posts: [...prevState.posts, response.data]
            }))
        }).catch(err => console.log(err.response.data.errMsg))
    }

    getUserPosts = () => {
        dataAxios.get("/api/posts").then(res => {
            this.setState({
                posts: res.data
            })
        }).catch(err => console.log(err.response.data.errMsg))
    }

    render(){
        return(
            <UserContext.Provider value= {{
                ...this.state,
                signup: this.signup,
                login: this.login,
                logout: this.logout,
                addPost: this.addPost,
                getUserPosts: this.getUserPosts,
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default withRouter(UserProvider)

export const withUser = C => props => (
    <UserContext.Consumer>
        {value => <C {...props} {...value} />}
    </UserContext.Consumer>
)