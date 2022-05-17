const express = require("express")

const server = express()

// DO YOUR MAGIC
//parse
server.use(express.json())

//catchall
server.use('*', (req, res, next)=> {
    next({status:404, message:'not found'})
})

//error handle

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message:err.message
    })
})


module.exports = server
