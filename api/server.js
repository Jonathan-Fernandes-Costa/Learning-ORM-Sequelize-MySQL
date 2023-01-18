const express = require('express')
const routes = require('./routes/index.js')
const port = process.env.PORT || 3000;
const app = express()



routes(app)



app.listen(port, () => console.log(`Servidor rodando em ${port}`))
module.exports = app