const { Genre } = require("./genreModels")

exports.addGenre = async (genreObj) => {
    try {
        await Genre.sync();
        await Genre.create(genreObj);
        return `Successfully added ${genreObj.genre} as a genre`;
    } catch (error) {
        console.log(error);
    }
};

exports.listGenres = async () => {
    try {
        const all = await Genre.findAll({})
        all.forEach(item => {console.log(`${item.genreId} ${item.genre}`)});
    } catch (error) {
        console.log(error)
    }
}
