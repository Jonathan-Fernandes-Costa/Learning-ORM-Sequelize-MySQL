const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js')
const router = Router();

router
    .get("/pessoas", PessoaController.pegaTodasAsPessoas)
    .get("/pessoas/:id", PessoaController.pegaUmaPessoa)
module.exports = router