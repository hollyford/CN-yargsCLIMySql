const Book = require("./bookModels");

exports.addBook = async (movieObj) => {
    try {
        // creates the table if it doesnt already exist:
        await Book.sync(); 
        await Book.create(movieObj)
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
