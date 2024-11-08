const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/PedidoController');

router.post('/pedido', PedidoController.criarPedido);
router.get('/pedido', PedidoController.listarPedido);
router.get('/pedido/:id', PedidoController.consultarPorId);
router.post('/pedido', PedidoController.criarPedido);
router.put('/pedido/:id', PedidoController.atualizarPedido);
router.delete('/pedido/:id', PedidoController.deletarPedido);

module.exports = router;