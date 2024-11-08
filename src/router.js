const express = require('express');

const categoriaRoutes = require('../src/routes/categoriaRoutes')
const pedidoRoutes = require('../src/routes/pedidoRoutes')
const produtoRoutes = require('../src/routes/produtoRoutes')
const userRoutes = require('../src/routes/userRoutes')

const router = express.Router();
router.use('/api', userRoutes, produtoRoutes, categoriaRoutes, pedidoRoutes); 

module.exports = router;