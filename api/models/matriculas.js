'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    status: DataTypes.STRING
  }, {});
  Matriculas.associate = function (models) {
    Matriculas.belongTo(models.Pessoas)
    Matriculas.belongTo(models.Turmas)
  }
  return Matriculas;
}
