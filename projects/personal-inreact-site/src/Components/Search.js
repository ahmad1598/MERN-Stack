import React from 'react'
import Header from './Header.js'
import Repo from './Repo.js'
import Profile from './Profile.js'
import {withUser} from '../context/UserProvider.js'
const Search = (props) => {
    const {user,reposResponse} = props
    const mappedRepos = reposResponse.map((repo,i) => <Repo key={i} repo = {repo} />)
    return(
        <div>
            <Header />
            { 
                (user)?

                <>
                <Profile />
                <div className="container">
                    <button className="btn disabled latest-respos">Latest Respos</button>
                    {mappedRepos}
                </div>
                </>:
                console.log('user not found')  
            }
        </div>
    )
    
}


export default withUser(Search)