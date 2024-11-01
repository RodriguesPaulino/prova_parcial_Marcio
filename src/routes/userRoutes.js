const express = require('express');
const UserRouter = express.Router();
const UserController = require('../controllers/UserController');
const TypeUserModel = require('../models/TypeUserModel');

UserRouter.post('/usuarios', UserController.criarUsuario);
UserRouter.get('/usuarios', UserController.listarUsuarios)
UserRouter.get('/usuarios/:id', UserController.consultarPorId)
UserRouter.post('/usuarios', UserController.criarUsuario)
UserRouter.put('/usuarios/:id', UserController.atualizarUsuario)
UserRouter.delete('/usuarios/:id', UserController.deletarUsuario)

module.exports = UserRouter;