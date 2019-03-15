const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid/v4')

let bounties = [
    {
        firstName: "Mace",
        lastName: "Windu",
        Living: true,
        bountyAmount: 1000,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Obi",
        lastName: "Kenobi",
        Living: true,
        bountyAmount: 51400,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Yoda",
        lastName: "Yo",
        Living: true,
        bountyAmount: 2000,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Kit",
        lastName: "Fisto",
        Living: true,
        bountyAmount: 15000,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Maul",
        Living: true,
        bountyAmount: 20000,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Darth",
        lastName: "Bane",
        Living: true,
        bountyAmount: 5000,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Sheev",
        lastName: "Palpatine",
        Living: true,
        bountyAmount: 3000,
        type: "Sith",
        _id: uuid()
    }
]

bountyRouter.route("/")
    .get((req,res) => {
        res.send(bounties)
    })
    .post((req,res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(newBounty)
    })

bountyRouter.route("/:_id")
    .get((req,res) => {
        const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
        res.send(foundBounty)
    })
    .put((req,res) => {
        const foundBounty = bounties.find(bounty => bounty._id === req.params._id)
        Object.assign(foundBounty,req.body)
        res.send(foundBounty)
    })
    .delete((req,res) => {
        const updatedBounties = bounties.filter(bounty => bounty._id !== req.params._id)
        bounties = updatedBounties
        res.send('Bounty successfully deleted')
    })


    module.exports = bountyRouter