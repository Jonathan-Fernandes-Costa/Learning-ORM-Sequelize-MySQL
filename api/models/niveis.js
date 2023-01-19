'use strict';
module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define('Pessoas', {
    descr_nivel: DataTypes.STRING
  }, {});
  Niveis.associate = function(models){
    Niveis.hasmany(models.Turmas, {
      foreignKey: 'nivel_id'
    })
  };
  return Niveis;
}