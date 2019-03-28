const express = require("express")
const postRouter = express.Router()
const Post = require('../models/post.js')


// Add new post for a specific user
postRouter.post("/", (req, res, next) => {
    //create a new post on Post schema (model)
    const newPost = new Post(req.body)
    //user not gonna send the _id to us. we should add it manually to our server
    //and we can just add req.user._id to our newPost.user
    //we have a access to req.user._id because of express job
    //by addin req.user._id to each post, we can make a post for each specific user
    newPost.user = req.user._id
    //after we added _id to a new user, now we can save it
    newPost.save((err, newPost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newPost)
    })
})

// Get all posts belonging to a specific user
postRouter.get("/", (req, res, next) => {  
    Post.find({user: req.user._id}, (err, userPosts) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userPosts)
    })
})


module.exports = postRouter