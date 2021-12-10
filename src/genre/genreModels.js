const sequelize = require("../db/connection");
const { User } = require("../user/userModels")
const { DataTypes } = require("sequelize");

const Genre = sequelize.define("Genre" , {
    genreId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "userId",
        }
    }
})

module.exports = { Genre };