import React from 'react'
import BlogPost from './BlogPost.js';
import OlderPosts from './OlderPost.js'

const BlogList = () => {

    const blogPost = [
        {
            title: "Man must explore, and this is exploration at its greatest",
            subTitle: "Problems look mighty small from 150 miles up",
            date: "on September 24, 2019",
            author:" Start Bootstrap"

        },
        {
            title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            date: "on September 18, 2019",
            author:" Start Bootstrap"
        },
        {
            title: "Science has not yet mastered prophecy",
            subTitle: "We predict too much for the next year and yet far too little for the next ten.",
            date: "on August 24, 2019",
            author:" Start Bootstrap"

        },
        {
            title: "Failure is not an option",
            subTitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            date: "on July 8, 2019",
            author:" Start Bootstrap"
        }
    ]
    
    const blogListMap = blogPost.map((blog,i) => 
                        <BlogPost 
                            title = {blog.title} 
                            subTitle={blog.subTitle} 
                            date = {blog.date} 
                            author ={blog.author} 
                            key={i} /> );

    return (
        <div>
            {blogListMap}
            <OlderPosts />
        </div>
    )
}

export default BlogList