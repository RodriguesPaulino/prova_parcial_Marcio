const express = require('express');
const produtoRouter = express.Router();
const ProdutoController = require('../controllers/ProdutoController');
const ProdutoModel = require('../models/ProdutoModel');

produtoRouter.post('/produto', ProdutoController.criarProduto);
produtoRouter.get('/produto', ProdutoController.listarProduto);
produtoRouter.get('/produto/:id', ProdutoController.consultarPorId);
produtoRouter.post('/produto', ProdutoController.criarProduto);
produtoRouter.put('/produto/:id', ProdutoController.atualizarProduto);
produtoRouter.delete('/produto/:id', ProdutoController.deletarProduto);

module.exports = produtoRouter;