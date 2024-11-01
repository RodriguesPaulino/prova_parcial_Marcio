const express = require('express');
const categoriaRouter = express.Router();
const CategoriaController = require('../controllers/CategoriaController');
const CategoriaModel = require('../models/CategoriaModel');

categoriaRouter.post('/categoria', CategoriaController.criarCategoria);
categoriaRouter.get('/categoria', CategoriaController.listarCategoria);
categoriaRouter.get('/categoria/:id', CategoriaController.consultarPorId);
categoriaRouter.post('/categoria', CategoriaController.criarCategoria);
categoriaRouter.put('/categoria/:id', CategoriaController.atualizarCategoria);
categoriaRouter.delete('/categoria/:id', CategoriaController.deletarCategoria);

module.exports = categoriaRouter;