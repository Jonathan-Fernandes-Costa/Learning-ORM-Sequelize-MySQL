const bodyparser = require('body-parser')
const pessoas = require('./PessoaRoute.js')


module.exports = app => {
    app.use(bodyparser.json(), pessoas)


}