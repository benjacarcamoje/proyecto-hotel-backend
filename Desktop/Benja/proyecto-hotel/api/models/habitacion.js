'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Habitacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Habitacion.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    disponible: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Habitacion',
  });
  return Habitacion;
};