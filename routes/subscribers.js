const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber.js')


// Get all subscribers
router.get('/', async (req, res) => {
    try{
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    }
    catch(err){
        res.status(500).json({message: err.message})

    }
   
})

//Get one subscriber
router.get('/:id', (req, res) => {
    
})

// Create one subscriber
router.post('/',  async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedChannel:req.body.subscribedChannel
    })

    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
    
});

// Update one subscriber
router.patch('/:id', (req, res) => {
    
})


// Delete one subscriber
router.delete('/:id', (req, res) => {
    
})



module.exports = router
