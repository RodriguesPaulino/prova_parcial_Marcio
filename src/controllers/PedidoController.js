const PedidoModel = require('../models/PedidoModel');

class PedidoController {

    async listarPedido(request, response) {
        try {
            const dados = await PedidoModel.findAll();
            return response.json(dados);
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao listar pedido.' });
        }
        
    }

    async consultarPorId(request, response) {
        try {
            const id = request.params.id;
            const dados = await PedidoModel.findByPk(id);
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao listar pedido.' });
        }
    }

    async criarPedido(request, response) {
        try {
            const dados = request.body;
            const resultado = await PedidoModel.create(dados);
            return response.json({ message: 'Pedido criado com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao criar pedido.' });
        }
    }

    async atualizarPedido(request, response) {
        try {
            const id = request.params.id;
            const dados = request.body;
            const resultado = await PedidoModel.update(dados, { 
                where: { id: id }
             });
            return response.json({ message: 'Pedido atualizado com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao atualizar pedido.' });
        }
    }

    async deletarPedido(request, response) {
        try {
            const id = request.params.id;
            const resultado = await PedidoModel.destroy({ where: { id: id } });
            return response.json({ message: 'Pedido deletado com sucesso.' });
        } catch(e) {
            return response.status(500).json({ error: 'Ocorreu um erro ao deletar pedido.' });
        }
    }

}

module.exports = new PedidoController();