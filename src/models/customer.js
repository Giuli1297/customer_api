const sequelize = require('../database/sequelize');
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;


const Customer = sequelize.define('customer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sexo: {
        type: DataTypes.STRING,
    },
    fecha_de_nacimiento: {
        type: DataTypes.DATE,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});


module.exports = Customer