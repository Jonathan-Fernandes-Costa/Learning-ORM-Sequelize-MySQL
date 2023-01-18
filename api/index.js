const express = require('express')
const bodyparser = require('body-parser')
const port = 3000
const app = express()
app.use(bodyparser.json())

app.get('/teste', (req, res) => {
    res.status(200).send("Teste concluido")
})
app.listen(port, () => console.log(`Servidor rodando em ${3000}`))
