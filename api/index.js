const express = require('express')
const routes = require('./routes/index.js')
const port = 3000
const app = express()

routes(app)


app.listen(port, () => console.log(`Servidor rodando em ${3000}`))
module.exports = app
