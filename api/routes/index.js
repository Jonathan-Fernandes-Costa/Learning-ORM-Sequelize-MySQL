const bodyparser = require('body-parser')
const pessoas = require('./PessoaRoute.js')
const niveis = require('./NivelRoute.js')
const turmas = require('./TurmaRoute.js')


module.exports = app => {
    app.use(
    bodyparser.json(), 
    pessoas,
    niveis,
    turmas
    )


}