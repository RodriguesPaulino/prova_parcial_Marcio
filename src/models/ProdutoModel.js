const { DataTypes } = require('sequelize');
const Connection = require('../config/Connection');
const CategoriaModel = require('./CategoriaModel');

const ProdutoModel = Connection.define('ProdutoModel', 
    {
   
      nome: {
          type: DataTypes.STRING,
          allowNull: false,
      },

      descricao: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      valor: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      custo: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },

      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      id_categoria: {
          type:DataTypes.INTEGER,
          allowNull: false,
          references: {
              model: CategoriaModel,
              key: 'id'
          }
      }
  }, {
    timestamps: false,
    tableName: 'produtos'
  });

module.exports = ProdutoModel;