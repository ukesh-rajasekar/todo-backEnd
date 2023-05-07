const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app')

const PORT = process.env.PORT || 5000;


const DB = process.env.DATABASE;


console.log(process.env.DATABASE_PASSWORD)
mongoose.connect(DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(con.connections);
        console.log('DB connected succesfully 🪣')
    }).catch(err => {
        console.log('DB connection failed 👀', err)
    })


app.listen(PORT, () => {
    console.log(`listening on ${DB}`);
})

