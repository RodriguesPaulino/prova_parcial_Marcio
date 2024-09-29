const { Sequelize } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});


(async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
    }
  })();

 

module.exports = sequelize;