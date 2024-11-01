const CategoriaModel = require('../models/CategoriaModel');

class CategoriaController {

    async listarCategoria(request, response) {
        try {
            const dados = await CategoriaModel.findAll();
            return response.json(dados);
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao listar categorias.' });
        }
        
    }

    async consultarPorId(request, response) {
        try {
            const id = request.params.id;
            const dados = await CategoriaModel.findByPk(id);
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao listar categorias.' });
        }
    }

    async criarCategoria(request, response) {
        try {
            const dados = request.body;
            const resultado = await CategoriaModel.create(dados);
            return response.json({ message: 'Categoria criada com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao criar categoria.' });
        }
    }

    async atualizarCategoria(request, response) {
        try {
            const id = request.params.id;
            const dados = request.body;
            const resultado = await CategoriaModel.update(dados, { 
                where: { id: id }
             });
            return response.json({ message: 'Categoria atualizado com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao atualizar categoria.' });
        }
    }

    async deletarCategoria(request, response) {
        try {
            const id = request.params.id;
            const resultado = await CategoriaModel.destroy({ where: { id: id } });
            return response.json({ message: 'Categoria deletado com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao deletar categoria.' });
        }
    }

}

module.exports = new CategoriaController();