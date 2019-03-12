import React from 'react'
const Home = () => {
    return(
        <div className="container homeContainer">
                <div className="card-panel card-body homeImg"></div>
                    <div className="card homeCard">
                        <div className="card-content">
                            <span className="card-title">GitHub User Finder</span>
                            <p>I am a Github user finder. I am very good at finding all the user at GitHub.
                                You can find any random GitHub user and see their work. Just use Search tab and start typing any username. by pressing each key, if there is any Github username matches with that character(username), you will see the profile and the their last 5 repositories. 
                                Otherwise, if there is no user with that username, it will let you know that user not found.
                            </p>
                        </div>
                    </div>
        </div>
    )
    
}

export default Home