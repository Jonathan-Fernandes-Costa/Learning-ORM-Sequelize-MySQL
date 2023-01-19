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
    static async pegaUmaPessoa(req, res){
        const { id } =  req.params
        try{
            const umaPessoa = await database.Pessoas.findOne({where: {id:Number(id)}})
            return res.status(200).json(umaPessoa)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
    static async criaPessoa(req, res){
        const pessoa = req.body
        try{
            const novapessoa = await database.Pessoas.create(pessoa)
            return res.status(200).json(novapessoa)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}
module.exports = PessoaController