const { Book, User, Author, Genre } = require("./bookModels");

exports.addUser = async (userObj) => {
    try {
        await User.sync();
        await User.create(userObj);
        return `Successfully added ${userObj.firstName} as a user`;
    } catch (error) {
        console.log(error);
    }
};

exports.addBook = async (bookObj) => {
    try {
        // creates the table if it doesnt already exist:
        await Book.sync();
        await Book.create(bookObj)
        return `Successfully created ${bookObj.title}`
    } catch (error) {
        console.log(error)
    }
}

exports.listBooks = async () => {
    try {
        console.log(await Book.findAll({}))
    } catch (error) {
        console.log(error)
    }
}


