const mongoose = require('mongoose');
require('dotenv').config();

const DataBaseUrl = process.env.DATABASE_URL;

const dbconnect = () => { 
    mongoose.connect(DataBaseUrl)
.then(()=> console.log("DB connected"))
.catch((err)=>{
    console.log(err.message)
    console.error(err);
    process.exit(1);
})
}

module.exports = dbconnect;