'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    data_inicio: DataTypes.DATEONLY
  }, {});
  Turmas.associate = function (models) {
    Turmas.hasmany(models.Matriculas, {//Criando a Associação e definindo o nome dela
      foreignKey: 'turma_id'
    })
    Turmas.belongTo(models.Pessoas);
    Turmas.belongTo(models.Niveis);

  }
  return Turmas;
}


