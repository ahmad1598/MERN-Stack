import React,{Component} from 'react'
import '../Style/style.css'
import axios from 'axios'
const id = process.env.REACT_APP_CLIENT_ID
const secret = process.env.REACT_APP_CLIENT_SECRET
// import Home from './Home.js'
// import Navbar from './Navbar.js'
// import Search from './Search.js'
// import Contact from './Contact.js'
// import {Switch, Route} from 'react-router-dom'
class App extends Component{
    constructor(){
        super()
        this.state = {
            repos_count : 5,
            repos_sort: 'created:asc',
            user: "",
            profileResponse:{},
            profile: "",
            reposCount:5,
            reposResponse:[]
        }
    }

    handleChange = e => {
        this.setState({
            user : e.target.value
        
        }, () =>  this.getUser()
        
        )
       
    }

    // findMatch (wordMatch,names){
    //     return(names.filter(name => {
    //         const regex = new RegExp(wordMatch,'gi')
    //         return name.login.match(regex)
    //     }))
    // }

    getUser = () => {
        const user = this.state.user
        const url = `https://api.github.com/users/${user}?client_id=${id}&client_secret=${secret}`
        axios.get(url).then(response => {
            // console.log(response.data)
                this.setState(({ profileResponse: response.data }))
                // console.log(this.state.user)
                this.getRepos()
            
        }).catch(err => {
            console.log(err)
            alert('User not Found')
        })
    }

    getRepos = () => {
        const user = this.state.user
        const url = `https://api.github.com/users/${user}/repos?per_page=${this.state.reposCount}`
        axios.get(url).then(response => {
            this.setState(({reposResponse: response.data}))
        })
    }

    async componentDidMount(){
        const test = await axios.get(`https://api.github.com`)
        console.log(test)
    }

    
    handleSumbut = e => {
        e.preventDefault()
        console.log('clicked')

    }

    render(){
        const profile = this.state.profileResponse;
        const repos = this.state.reposResponse;
        const mappedRepos = repos.map(repo => 
            
            <div className="card-panel  z-depth-1 blue ">
                <div> 
                    <a className="white-text" href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>    
                
                    <span className="badge white-text">Stars: {repo.stargazers_count}</span>
                    <span className="badge white-text">Watchers: {repo.watchers_count}</span>
                    <span className="badge white-text">Forks: {repo.forms_count}</span>
                </div>
            </div>
        )
        
        // const matches = this.findMatch(this.state.user,this.state.profileResponse)
        return(
            <div>
                    <div className="container searchContainer hoverable">
                        <div className="search card-panel light-blue card-body">
                            {/* <h1>Search </h1> */}
                            <h1>. </h1>
                            <p className="lead">Enter a username </p>
                            <form onSubmit = {this.handleSumbut}>
                            <input className="form-control white-text " type="text" name="user" value={this.state.user} onChange = {this.handleChange} placeholder="GitHub Username..."/>
                            </form>
                        </div>
                    </div>
                 
                    { (this.state.user)
                    ?
                    
                    <>
                    <div className="container">
                        <div className="row">
                            <div className="col s4">
                                <img className="z-depth-2 responsive-img circle" src={`${profile.avatar_url}`} alt=""/>
                                <a className="btn btn-primary btn-block mb-4">Name: {profile.name}</a>
                                <a href={`${profile.html_url}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block mb-4">View Profile</a>
                            </div>
                            
                            <div className="col s8">
                               <div className="card-panel repoBtn">
                                <button className="btn waves-effect blue">Public Repos: {profile.public_repos}</button> 
                                <button className="btn waves-effect blue">Public Gists: {profile.gists}</button>
                                <button className="btn waves-effect blue">Followers: {profile.followers}</button>
                                <button className="btn waves-effect blue">Following: {profile.following}</button>
                               </div>
                                <br/>

                                <ul className="collection z-depth-1">
                                    <li className="collection-item blue-text "> <strong className="black-text" >Company:</strong> {profile.company ? profile.company : " Not Available"}</li>
                                    <li className="collection-item blue-text "><strong  className="black-text" >Website/Blog:</strong> {profile.blog ? profile.blog : " Not Available "}</li>
                                    <li className="collection-item blue-text "><strong  className="black-text" >Location:</strong> {profile.location ? profile.location : " Not Available"}</li>
                                    <li className="collection-item blue-text "><strong  className="black-text" >Member Since:</strong> {profile.created_at ? profile.created_at : " Not Available"}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h3 className="card-title">Latest Respos</h3>
                        {mappedRepos}
                    </div>
                    </>

                    :
                    <div></div>
                    }
            </div>
        )
    }
}


export default App




{/* <Navbar />
                <Switch>
                    <Route component={Home} path="/" />
                    <Route component={Search} path="/search" />
                    <Route component={Contact} path="/contact" />
                    <Route component={Home} path="/" />
                </Switch> */}


                    {/* { matches.map((each,i) => <div key = {i}>{each.login}</div> )} */}
                    {/* {this.state.profileResponse.map((each,i) => <div key = {i} > {each.login}</div>)} */}
                    {/* <div style={{backgroundImage:`url(${this.state.profileResponse.avatar_url})`,height:300,width:300 , backgroundSize:"cover"}}>
                        <h1>{this.state.profileResponse.name}</h1> */}
                        {/* <h1>{this.state.profileResponse.company}</h1> */}
                    {/* <img src={this.state.user.avatar_url} alt="" /> */}
                    {/* </div> */}
                      