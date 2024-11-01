const ProdutoModel = require('../models/ProdutoModel');

class ProdutoController {

    async listarProduto(request, response) {
        try {
            const dados = await ProdutoModel.findAll();
            return response.json(dados);
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao listar produtos.' });
        }
        
    }

    async consultarPorId(request, response) {
        try {
            const id = request.params.id;
            const dados = await ProdutoModel.findByPk(id);
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao listar produtos.' });
        }
    }

    async criarProduto(request, response) {
        try {
            const dados = request.body;
            const resultado = await ProdutoModel.create(dados);
            return response.json({ message: 'Produto criado com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao criar produto.' });
        }
    }

    async atualizarProduto(request, response) {
        try {
            const id = request.params.id;
            const dados = request.body;
            const resultado = await ProdutoModel.update(dados, { 
                where: { id: id }
             });
            return response.json({ message: 'Produto atualizado com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao atualizar produto.' });
        }
    }

    async deletarProduto(request, response) {
        try {
            const id = request.params.id;
            const resultado = await ProdutoModel.destroy({ where: { id: id } });
            return response.json({ message: 'Produto deletado com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao deletar produto.' });
        }
    }

}

module.exports = new ProdutoController();