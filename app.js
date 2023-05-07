const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const todoRouter = require('./routers/todoRouter')

const app = express();

// Body parser: reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

app.use(cors());

//Set security http headers
app.use(helmet())

app.use('/api/v1/todo', todoRouter);


module.exports = app;