const express = require('express')
const fruitRouter = express.Router()



const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]


fruitRouter.get('/search',(req,res) => {
    const {name,type,maxPrice,minPrice} = req.query
    if(name){
        const fountItem = inventoryItems.filter(item => {
            if(item.name == name){
                return item
            }
        })
        res.send(fountItem)
    } else if(type){
        const foundItem = inventoryItems.filter(item => {
            if(item.type === type){
                return item
            }
        })
        res.send(foundItem)
    } else if(maxPrice){
        const fountItem = inventoryItems.filter(item => {
            if(item.price <= Number(maxPrice) && item.price >= minPrice){
                return item
            }
        })
        res.send(fountItem)
    }
})

fruitRouter.get('/' , (req,res) => {
    res.send(inventoryItems)
})






module.exports = fruitRouter