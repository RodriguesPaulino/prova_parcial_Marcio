const express = require('express');
const pedidoRouter = express.Router();
const PedidoController = require('../controllers/PedidoController');
const PedidoModel = require('../models/PedidoModel');

pedidoRouter.post('/pedido', PedidoController.criarPedido);
pedidoRouter.get('/pedido', PedidoController.listarPedido);
pedidoRouter.get('/pedido/:id', PedidoController.consultarPorId);
pedidoRouter.post('/pedido', PedidoController.criarPedido);
pedidoRouter.put('/pedido/:id', PedidoController.atualizarPedido);
pedidoRouter.delete('/pedido/:id', PedidoController.deletarPedido);

module.exports = pedidoRouter;