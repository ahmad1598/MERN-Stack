const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')
// const uuid = require('uuid/v4')

// let bounties = [
//     {
//         firstName: "Mace",
//         lastName: "Windu",
//         Living: true,
//         bountyAmount: 1000,
//         type: "Jedi",
//         _id: uuid()
//     },
//     // },
//     {
//         firstName: "Obi",
//         lastName: "Kenobi",
//         Living: true,
//         bountyAmount: 51400,
//         type: "Jedi",
//         _id: uuid()
//     },
//     {
//         firstName: "Yoda",
//         lastName: "Yo",
//         Living: true,
//         bountyAmount: 2000,
//         type: "Jedi",
//         _id: uuid()
//     },
//     {
//         firstName: "Kit",
//         lastName: "Fisto",
//         Living: true,
//         bountyAmount: 15000,
//         type: "Jedi",
//         _id: uuid()
//     },
//     {
//         firstName: "Darth",
//         lastName: "Maul",
//         Living: true,
//         bountyAmount: 20000,
//         type: "Sith",
//         _id: uuid()
//     },
//     {
//         firstName: "Darth",
//         lastName: "Bane",
//         Living: true,
//         bountyAmount: 5000,
//         type: "Sith",
//         _id: uuid()
//     },
//     {
//         firstName: "Sheev",
//         lastName: "Palpatine",
//         Living: true,
//         bountyAmount: 3000,
//         type: "Sith",
//         _id: uuid()
//     }
// ]

//Get All
bountyRouter.get('/',(req,res,next) => {
    //on this point whatever comes back would be either error or response. because we will getting back an 
    //array of objects then we will put our response as a bounties name
    //Bounty.find is a synchronous. it's gonna go and query a database on the other sever 27107, when it's back it will 
    //get back one of err or data. if it's bring back error, the other one (bounties) would be null or if it brings back bounties, 
    // error would be null
    Bounty.find((err,bounties) => {
        if(err){
            //500 is a error status
            res.status(500)
            return next(err)
        }
        // 200 means everything is okey and we got the data back
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
    //first we need to get access to user's object. means we need to save user's data first.
    //by using line below we can make a new bounty object using our model Bounty 
    const newBounty = new Bounty(req.body)
    newBounty.save((err,newBountyObj) => {
        if(err){
            res.status(500)
            return next(err)
        }
        //response status for successful post or put request
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
bountyRouter.put(":_id",(req,res,next) => {
    Bounty.findOneAndUpdate({_id: req.params._id}, req.body,{new:true},(err,updatedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedBounty)
    })
})


// bountyRouter.route("/")
//     .get((req,res) => {
//         res.send(bounties)
//     })
//     .post((req,res) => {
//         const newBounty = req.body
//         newBounty._id = uuid()
//         bounties.push(newBounty)
//         res.send(newBounty)
//     })

// bountyRouter.route("/:_id")
//     .get((req,res) => {
//         const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
//         res.send(foundBounty)
//     })
//     .put((req,res) => {
//         const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
//         Object.assign(foundBounty,req.body)
//         res.send(foundBounty)
//     })
//     .delete((req,res) => {
//         const updatedBounties = bounties.filter(bounty => bounty._id !== req.params._id)
//         bounties = updatedBounties
//         res.send('Bounty successfully deleted')
//     })


    module.exports = bountyRouter