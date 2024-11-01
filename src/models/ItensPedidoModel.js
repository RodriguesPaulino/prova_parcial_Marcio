const { DataTypes } = require('sequelize');
const Connection = require('../config/Connection')

const ItensPedidoModel = Connection.define(
    'ItensPedidoModel',
    {
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        valor: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
    
        id_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false,
            references: {
                model: PedidoModel,
                key: 'id'
            }

        },
        
        id_produto: {
        type: DataTypes.INTEGER,
        allowNull: false,
            references: {
                model: produtoModel,
                key: 'id'
            },

        },
    },
    
    {
        tableName: 'itens_pedido',
    }
)

module.exports = ItensPedidoModel;