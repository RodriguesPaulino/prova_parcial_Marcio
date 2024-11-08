const { DataTypes } = require('sequelize');
const Connection = require('../config/Connection')

const TransacoesModel = Connection.define(
    'TransacoesModel',
    {
        codigo_transacao: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        data_hora: {
            type: DataTypes.DATE,
            allowNull: false
        },
        status_transacao: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valor_transacao: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        tableName: 'transacoes',
    }
)

module.exports = TransacoesModel;