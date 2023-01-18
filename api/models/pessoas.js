'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {});
  Pessoas.associate = function(models){
    //associate aqui
  };
  return Pessoas;
};
// /*   class Pessoa extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Pessoas.init({
//     nome: DataTypes.STRING,
//     ativo: DataTypes.BOOLEAN,
//     email: DataTypes.STRING,
//     role: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Pessoas',
//   });
//   return Pessoas;
// }; */