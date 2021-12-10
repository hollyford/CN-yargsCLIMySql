const { Book } = require("./bookModels");


exports.addBook = async (bookObj) => {
    try {
        // creates the table if it doesnt already exist:
        await Book.sync();
        await Book.create(bookObj)
        console.log(`Successfully created ${bookObj.title}`)
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


