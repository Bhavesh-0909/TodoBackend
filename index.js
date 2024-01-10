const express = require('express')
require('dotenv').config();
const Todoroute = require('./router/Todo');
const database = require('./config/database');

const PORT = process.env.PORT;

const app = express()

app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`)
})

app.get('/', (req, res)=>{
    res.send("<h1>server started</h1>")
})

//middleware to parse json request body
app.use(express.json());

app.use('/api/v1', Todoroute);

database();


