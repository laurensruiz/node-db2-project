// DO YOUR MAGIC
const express = require('express')
const Car = require('./cars-model')
const router = express.Router()
const {checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid} = require('./cars-middleware')

router.get('/', async (req, res, next)=> {
    //res.json('get all') //test
    try{
        const cars = await Car.getAll()
        res.json(cars)
    } catch(err){
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res, next)=> {
    //res.json('get by id')
    res.json(req.car)
})

router.post('/', checkCarPayload, checkVinNumberUnique, checkVinNumberValid, async (req, res, next)=> {
    //res.json('post')
})

module.exports = router