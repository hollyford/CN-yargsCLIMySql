const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");
// the last one lets you add the datatypes to the table

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
    }
},
    {
        tableName: "Authors"
    }
)

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
        type: DataTypes.STRING
    }
},
    {
        tableName: "Books"
    });



module.exports = Book, User, Author;