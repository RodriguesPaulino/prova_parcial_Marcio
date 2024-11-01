const Connection = require('../config/Connection')

const categoriaRoutes = require('../models/CategoriaModel')
const pedidoRoutes = require('../models/PedidoModel')
const produtoRoutes = require('../models/ProdutoModel')
const tipoPagamentoRoutes = require('../models/TipoPagamentoModel')
const userRoutes = require('../models/UserModel')


Connection.sync({ force: false })

const router = express.Router();
router.use('/api', userRoutes, pagamentoRoutes, produtoRoutes, categoriaRoutes, pedidoRoutes); 

module.exports = router;