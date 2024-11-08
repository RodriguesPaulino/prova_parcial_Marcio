const { DataTypes } = require('sequelize');
const Connection = require('../config/Connection');

const CategoriaModel = Connection.define(
    'CategoriaModel',
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_categoria_pai: {
            type: DataTypes.INTEGER,
            allowNull: true,
            
        }
    },
    {
        tableName: 'categoria',
    }
);

CategoriaModel.belongsTo(CategoriaModel, {
    foreignKey: 'id_categoria_pai',
    as: 'categoriapai',

});

module.exports = CategoriaModel;