const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.FLOAT,
    unique: true,
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: 'produto'
});

module.exports = Produto;