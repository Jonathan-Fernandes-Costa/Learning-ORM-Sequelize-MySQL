'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    status: DataTypes.STRING
  }, {});
  Matriculas.associate = function (models) {
    Matriculas.belongTo(models.Pessoas, {
      foreignKey: 'estudante_id'
    })
    Matriculas.belongTo(models.Turmas, {
      foreignKey: 'turma_id'
    })
  }
  return Matriculas;
}
