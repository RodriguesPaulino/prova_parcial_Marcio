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
            references: {
                model: CategoriaModel,
                key: 'id',
            },
            
        }
    },
    {
        tableName: 'categoria',
    }
)

module.exports = CategoriaModel;