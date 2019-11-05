const express = require("express")
const app = express()
const mongoose = require('mongoose')
const port = process.env.SERVER_PORT || 5000
const bodyParser = require('body-parser')
const path = require('path')
const api = require('./server/routes/api')



mongoose.connect("mongodb://localhost/wheatherDB", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
app.use(express.static(path.join(__dirname, "dist")))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', api)






app.listen(port, () => console.log(`Running server on port ${port}`))
