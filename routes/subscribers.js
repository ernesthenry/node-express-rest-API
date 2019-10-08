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
router.get('/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber)
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
router.patch('/:id', getSubscriber, (req, res) => {
    
})


// Delete one subscriber
router.delete('/:id', getSubscriber, (req, res) => {
    
})


async function getSubscriber(req,res, next){
    try{
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber==null){
            return res.status(400).json("Can't find subscriber")
        }
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
    res.subscriber = subscriber
    next()
}


module.exports = router
