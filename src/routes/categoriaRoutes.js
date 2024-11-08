const express = require('express');
const CategoriaController = require('../controllers/CategoriaController');
const router = express.Router();

router.post('/categoria', CategoriaController.criarCategoria);
router.get('/categoria', CategoriaController.listarCategoria);
router.get('/categoria/:id', CategoriaController.consultarPorId);
router.post('/categoria', CategoriaController.criarCategoria);
router.put('/categoria/:id', CategoriaController.atualizarCategoria);
router.delete('/categoria/:id', CategoriaController.deletarCategoria);

module.exports = router;