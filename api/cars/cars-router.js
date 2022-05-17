// DO YOUR MAGIC
const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next)=> {
    res.json('get all')
})

router.get('/:id', async (req, res, next)=> {
    res.json('get by id')
})

router.post('/', async (req, res, next)=> {
    res.json('post')
})

module.exports = router