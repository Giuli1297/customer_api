const Sequelize = require("sequelize");

const sequelize = new Sequelize('customer-db', 'user', 'pass', {
    host: ':memory:',
    dialect: 'sqlite'
});

module.exports = sequelize;