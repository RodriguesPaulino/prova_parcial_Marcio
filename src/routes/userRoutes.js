const express = require('express');
const UserController = require('../controllers/UserController');
const TypeUserController = require('../controllers/TypeUserController');
const router = express.Router();

router.post('/usuarios', UserController.criarUsuario);
router.get('/usuarios', UserController.listarUsuarios)
router.get('/usuarios/:id', UserController.consultarPorId)
router.post('/usuarios', UserController.criarUsuario)
router.put('/usuarios/:id', UserController.atualizarUsuario)
router.delete('/usuarios/:id', UserController.deletarUsuario)

module.exports = router;