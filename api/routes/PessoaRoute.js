const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js')
const router = Router();

router
    .get("/pessoas", PessoaController.pegaTodasAsPessoas)
    .get("/pessoas/:id", PessoaController.pegaUmaPessoa)
    .post("/pessoas", PessoaController.criaPessoa)
module.exports = router