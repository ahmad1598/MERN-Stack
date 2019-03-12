import React from 'react'

const Repo = (props) => {
    return (
        <div className="card-panel  z-depth-1  repos ">
            <div> 
                <a className="white-text" href={props.repo.html_url} target="_blank" rel="noopener noreferrer">{props.repo.name}</a>  
                <span className="badge white-text">language: {props.repo.language}</span>  
                <span className="badge white-text">Stars: {props.repo.stargazers_count}</span>
                <span className="badge white-text">Watchers: {props.repo.watchers_count}</span>
                <span className="badge white-text">Forks: {props.repo.forms_count}</span>
            </div>
        </div>
    )
}

export default Repo