const sequelize = require("../db/connection");
const { User } = require("../user/userModels")
const { Genre } = require("../genreModels")
const { Author } = require("../authorModels")
const { DataTypes } = require("sequelize");
// the last one lets you add the datatypes to the table

const Book = sequelize.define("Book", {
    bookId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        // defaultValue:
    },
    author: {
        type: DataTypes.INTEGER,
        references: {
            model: Author,
            key: "authorId",
        }
    },
    genre: {
        type: DataTypes.INTEGER,
        references: {
            model: Genre,
            key: "genreId",
        }
    },
    rating: {
        type: DataTypes.DECIMAL(3, 2)
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
        tableName: "Books"
    });



module.exports = { Book };