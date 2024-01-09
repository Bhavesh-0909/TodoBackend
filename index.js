const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT;

const app = express()

app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`)
})

app.get('/', (req, res)=>{
    res.send("<h1>server started</h1>")
})