const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const connectDB = require('./config/db')

//connect database
connectDB();

//start server
app.listen(process.env.PORT, () => console.log('Server is running'))