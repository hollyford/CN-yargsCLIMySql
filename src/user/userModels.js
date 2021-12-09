const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },

},
    {
        tableName: "Users"
    });

    module.exports = { User };