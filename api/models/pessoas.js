'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {});
  Pessoas.associate = function (models) {
    Pessoas.hasmany(models.Turmas, {//Criando a Associação e definindo o nome dela
      foreignKey: 'docente_id'
    })
    Pessoas.hasmany(models.Matriculas, {//Criando a Associação e definindo o nome dela
      foreignKey: 'estudante_id'
    })
  };
  return Pessoas;
};