const express = require('express');
const app = express();
const Router = require('./api/routes/route')
const db = require('./config/db')
db.connectDB()

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json())

app.use('/api/v1', Router)

app.get('/', (req, res) => {
    console.log("hello")
    res.send("I am default router")
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})