const { Author } = require("./authorModels")

exports.addAuthor = async (authorObj) => {
    try {
        await Author.sync();
        await Author.create(authorObj);
        return `Successfully added ${authorObj.firstName} ${authorObj.lastName} as to the author list`;
    } catch (error) {
        console.log(error);
    }
};

exports.listAuthors = async () => {
    try {
        const all = await Author.findAll({})
        all.forEach(item => {console.log(`${item.authorId} ${item.firstName} ${item.lastName}`)});
    } catch (error) {
        console.log(error)
    }
}
