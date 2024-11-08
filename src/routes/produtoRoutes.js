const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');

router.post('/produto', ProdutoController.criarProduto);
router.get('/produto', ProdutoController.listarProduto);
router.get('/produto/:id', ProdutoController.consultarPorId);
router.post('/produto', ProdutoController.criarProduto);
router.put('/produto/:id', ProdutoController.atualizarProduto);
router.delete('/produto/:id', ProdutoController.deletarProduto);

module.exports = router;