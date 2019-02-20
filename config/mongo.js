const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const databaseConnection = mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
})

module.exports = databaseConnection
