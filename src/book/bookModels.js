const sequelize = require("../db/connection");
const { User } = require("../user/userModels")
const { DataTypes } = require("sequelize");
// the last one lets you add the datatypes to the table


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



module.exports = { Book, Author, Genre };