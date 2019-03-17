const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')


//Get All
bountyRouter.get('/',(req,res,next) => {
    Bounty.find((err,bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
}) 

//Get One
bountyRouter.get('/:_id', (req,res,next) => {
    Bounty.findOne({_id: req.params._id}, (err,bounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

//Post One
bountyRouter.post("/",(req,res,next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err,newBountyObj) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newBountyObj)
    })
})


//Delete One
bountyRouter.delete("/:_id",(req,res,next) => {
    Bounty.findOneAndDelete({_id: req.params._id},(err,deletedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`Bounty ${deletedBounty.firstName} was successfully deleted!`)
    })
})

//Update One
bountyRouter.put("/:_id",(req,res,next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params._id}, 
        req.body,
        {new:true},
        (err,updatedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedBounty)
    })
})


module.exports = bountyRouter