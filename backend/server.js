const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const connectDB = require('./config/db')
const authController = require('./controllers/authController')

//connect database
connectDB();

//routes and middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authController)

//start server
app.listen(process.env.PORT, () => console.log('Server is running'))