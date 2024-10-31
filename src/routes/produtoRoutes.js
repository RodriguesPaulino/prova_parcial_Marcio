const express = require('express');
const router = express.Router();
const Produto = require('../models/ProdutoModel');

// Create
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

// Read
router.get('/produtos', async (req, res) => {
  try {
    const produto = await Produto.sequelize.query(
      'SELECT * FROM produto',
      { type: Produto.sequelize.QueryTypes.SELECT }
    );
    res.json(produto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read pelo ID
router.get('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const produto = await Produto.sequelize.query(
      'SELECT * FROM produto WHERE id = ?',
      { replacements: [id], type: Produto.sequelize.QueryTypes.SELECT }
    );
    if (user.length === 0) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json(produto[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update
router.put('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, valor } = req.body;
  try {
    await Produto.sequelize.query(
      'UPDATE produto SET nome = ?, valor = ? WHERE id = ?',
      { replacements: [nome, valor, id], type: Produto.sequelize.QueryTypes.UPDATE }
    );
    res.json({ message: 'Produto atualizado com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete
router.delete('/produtos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Produto.sequelize.query(
      'DELETE FROM produto WHERE id = ?',
      { replacements: [id], type: Produto.sequelize.QueryTypes.DELETE }
    );
    res.json({ message: 'Produto excluído com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


  module.exports = router;