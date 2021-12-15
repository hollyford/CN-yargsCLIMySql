const { Author } = require("./authorModels")

exports.addAuthor = async (authorObj) => {
    try {
        await Author.sync();
        await Author.create(authorObj);
        console.log(`Successfully added ${authorObj.firstName} ${authorObj.lastName} as to the author list`);
    } catch (error) {
        console.log(error);
    }
};
