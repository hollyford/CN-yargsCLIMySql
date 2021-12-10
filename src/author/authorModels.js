const sequelize = require("../db/connection");
const { User } = require("../user/userModels")
const { DataTypes } = require("sequelize");

const Author = sequelize.define("Author", {
    authorId: {
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
        allowNull: true
    },
    dob: {
        type: DataTypes.DATEONLY,
    },
    placeOfBirth: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "userId",
        }
    }
},
    {
        tableName: "Authors"
    }
)

module.exports = { Author };