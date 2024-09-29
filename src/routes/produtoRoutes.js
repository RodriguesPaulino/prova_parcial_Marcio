const express = require('express');
const router = express.Router();
const Produto = require('../models/Produto');

router.post('/produtos', async (req, res) => {
    const { nome, valor } = req.body;
    try {
      const newUser = await Produto.sequelize.query(
        'INSERT INTO produto (nome, valor) VALUES (?, ?)',
        { replacements: [nome, valor], type: Produto.sequelize.QueryTypes.INSERT }
      );
      res.status(201).json({ message: 'Produto criado com sucesso!' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
});


  module.exports = router;