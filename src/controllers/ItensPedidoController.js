const ItensPedidoModel = require('../models/ItensPedidoModel');

class ItensPedidoController {

    async listarItensPedido(request, response) {
        try {
            const dados = await ItensPedidoModel.findAll();
            return response.json(dados);
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao listar itens pedido.' });
        }
        
    }

    async consultarPorId(request, response) {
        try {
            const id = request.params.id;
            const dados = await ItensPedidoModel.findByPk(id);
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao listar itens pedido.' });
        }
    }

    async criarItensPedido(request, response) {
        try {
            const dados = request.body;
            const resultado = await ItensPedidoModel.create(dados);
            return response.json({ message: 'Itens pedido criado com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao criar itens pedido.' });
        }
    }

    async atualizarItensPedido(request, response) {
        try {
            const id = request.params.id;
            const dados = request.body;
            const resultado = await ItensPedidoModel.update(dados, { 
                where: { id: id }
             });
            return response.json({ message: 'Itens pedido atualizado com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao atualizar itens pedido.' });
        }
    }

    async deletarItensPedido(request, response) {
        try {
            const id = request.params.id;
            const resultado = await ItensPedidoModel.destroy({ where: { id: id } });
            return response.json({ message: 'itens pedido deletado com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao deletar itens pedido.' });
        }
    }

}

module.exports = new ItensPedidoController();