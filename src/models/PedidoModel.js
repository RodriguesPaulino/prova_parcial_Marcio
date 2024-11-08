const { DataTypes } = require('sequelize');
const Connection = require('../config/Connection')
const UserModel = require('../models/UserModel');
const TipoPagamentoModel = require('../models/TipoPagamentoModel');
const TransacoesModel = require('../models/TransacoesModel');


const PedidoModel = Connection.define(
    'PedidoModel',
    {
        codigo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        data_pedido: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        total: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        status_pedido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_conclusao: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        id_usuario: {
        type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
                key: 'id',
            },
        },
        id_tipo_pagamento: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: TipoPagamentoModel,
                key: 'id',
            },
        },
        id_transacao: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: TransacoesModel,
                key: 'id',
            },
        }
    },
    {
        tableName: 'pedido',
    }
)

module.exports = PedidoModel;