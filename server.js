require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongooose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error => console.log(error));
db.once('open', ()=> console.log('connected to database'));

app.listen(3000, () => console.log('Server Started '))