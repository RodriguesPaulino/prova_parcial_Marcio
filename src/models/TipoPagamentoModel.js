const { DataTypes } = require('sequelize');
const Connection = require('../config/Connection');

const TipoPagamentoModel = Connection.define(
    'TipoPagamentoModel',
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'tipo_pagamento',
    }

)

module.exports = TipoPagamentoModel;