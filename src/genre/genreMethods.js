const { Book } = require("../book/bookModels");
const { Genre } = require("./genreModels")

exports.addGenre = async (genreObj) => {
    try {
        await Genre.sync();
        await Genre.create(genreObj);
        console.log(`Successfully added ${genreObj.genre} as a genre`);
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


exports.editGenre = async (genrePKID, genreObj) => {
    try {
        await Genre.update({ genre: genreObj }, { where: { genreId: genrePKID}})

    } catch (error) {
        console.log(error) 
    }
}

exports.deleteGenre = async (genrePKID) => {
    try {
        await Genre.destroy({ where: { genreId: genrePKID}})
    } catch (error) {
        console.log(error) 
    }
}

// Used this to populate the table in the database:
exports.bulkAddGenres = async () => {
    try {
        await Genre.sync();
        await Genre.bulkCreate([{
            genre: "Classics",
            user: 1
        },
        {
            genre: "Comic book or Graphic Novel",
            user: 1
        },
        {
            genre: "Detective and Mystery",
            user: 1
        },
        {
            genre: "Fantasy",
            user: 1
        },
        {
            genre: "Historical Fiction",
            user: 1
        },
        {
            genre: "Literary Fiction”",
            user: 1
        },
        {
            genre: "Romance",
            user: 1
        },
        {
            genre: "Science Fiction",
            user: 1
        },
        {
            genre: "Short Stories",
            user: 1
        },
        {
            genre: "Suspense and Thrillers",
            user: 1
        },
        {
            genre: "Biographies and Autobiographies",
            user: 1
        },
        {
            genre: "Cookbooks",
            user: 1
        },
        {
            genre: "Essays",
            user: 1
        },
        {
            genre: "History",
            user: 1
        },
        {
            genre: "Memoir",
            user: 1
        },
        {
            genre: "Poetry",
            user: 1
        },
        {
            genre: "Self-Help",
            user: 1
        },
        {
            genre: "True Crime",
            user: 1
        }
    ]);
    } catch (error) {
        console.log(error)
    }   
    
}