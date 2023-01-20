const database = require('../models/index.js');//importanto o modelo
class NivelController {
    static async pegaTodosOsNiveis(req,res){//Metodo get todos
        try{
            const todosOsNiveis = await database.Niveis.findAll()
            return res.status(500).json({todosOsNiveis})
        }catch(error){
            res.status(500).json(error.message)
        }
    }
    static async pegaUmNivel(req, res){//metodo get especifico
        const { id } = req.params
        try{//findOne recebe uma função where
            const umNivel = await database.Niveis.findOne({where: {
                id: Number(id)
            }
        })
            return res.status(200).json(umNivel)
        }catch(error){
            res.status(500).json(error.message) 
        }
    }
    static async criaNivel(req, res){//Metodo post
        const newnivel = req.body
        try {
            const newNivelCriado = await database.Niveis.create(newnivel)
            return res.status(200).json(newNivelCriado)
        } catch (error) {
            res.status(500).json(error.message) 
        }
    }
    static async atualizaNivel(req,res){//Metodo put por id
        const { id } = req.params
        const newnivel = req.body
        try {
            await database.Niveis.update(newnivel, {where: {
                id: Number(id)
            }})
            const nivelatualizado = await database.Niveis.findOne({where: {id: Number(id)}})
            return res.status(200).json(nivelatualizado)
        } catch (error) {
            res.status(500).json(error.message) 
        }
    }
    static async apagaNivel(req, res){//Metodo delete por id
        const { id } = req.params
        try {
            await database.Niveis.destroy({where: {id: Number(id)}})
            return res.status(200).send(`Nivel ${id} foi apagado`)
        } catch (error) {
            res.status(500).json(error.message) 
        }
    }
}
module.exports = NivelController