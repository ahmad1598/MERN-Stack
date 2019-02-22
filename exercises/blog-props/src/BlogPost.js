import React from 'react'

const BlogPost = (props) => {
    return(
        <div className="blogPost">
            <div className="blogPostHover">
                <h1>{props.title}</h1>
                <h2>{props.subTitle}</h2>
            </div>
            <h3>Posted by <span>{props.author}</span> {props.date}</h3>
            <hr/>

        </div>
    )
}


export default BlogPost;