const database = require('../models/index.js');//importanto o modelo

class PessoaController {
    static async pegaTodasAsPessoas(req, res){//Usando o Get com o metodo findAll(), que é um metodo do sequelize
        try{
            const todasASPessoas = await database.Pessoas.findAll()//Pega todos os dados do banco de dados
        return res.status(200).json({todasASPessoas})
        }catch (error){
            return res.status(500).json(error.message)
        }
        
    }
}
module.exports = PessoaController