const express = require('express');
const Connection = require('./config/Connection');
const UserController = require('./controllers/UserController');
const userRoutes = require('./routes/userRoutes');
const produtoRoutes = require('./routes/produtoRoutes');


const app = express();
const port = 3000;

const sequelize = require('./config/Connection');

app.listen(port, () => {
    console.log(`servidor rodando... http://localhost:${port}`);
});

app.use(express.json());
app.use(userRoutes, produtoRoutes);



sequelize.authenticate()
  .then(() => console.log('Conectado ao banco de dados com sucesso!'))
  .catch(err => console.error('Não foi possível conectar ao banco de dados:', err));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

(async () => {
    await sequelize.sync({ force: true }); // Sincroniza e recria a tabela se já existir
    console.log("Tabelas sincronizadas!");
  })();
