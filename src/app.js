require("./db/connection");
const yargs = require("yargs");
const { addBook, listBooks } = require("./book/bookMethods");
const { addUser, listUsers } = require("./user/userMethods")
const { addGenre, listGenres, bulkAddGenres, deleteGenre, editGenres } = require("./genre/genreMethods")
const { addAuthor, listAuthors } = require("./author/authorMethods")


const app = async (args) => {
    switch (process.argv[2]) {
        case "add book":
            addBook({ title: args.title, author: args.author, genre: args.genre, rating: args.rating, user: args.user })
            break;
        case "list books":
            listBooks();
            break;
        case "add user":
            addUser({ firstName: args.firstName, lastName: args.lastName })
            break;
        case "list users":
            listUsers();
            break;
        case "add genre":
            addGenre({ genre: args.genre, user: args.user })
            break;
        case "delete genre":
            deleteGenre(process.argv[3])
        case "bulk add genres":
            bulkAddGenres();
            break;
        case "list genres":
            listGenres();
            break;
        case "edit genre":
            editGenre(process.argv[3], process.argv[4]);
            break;
        case "delete genre":
            deleteGenre(process.argv[3]);
            break;
        case "add author":
            addAuthor({ firstName: args.firstName, lastName: args.lastName, dob: args.dob, placeOfBirth: args.placeOfBirth, user: args.user })
            break;
        case "list authors":
            listAuthors();
            break;
        default:
            console.log("Incorrect command");
            break;
    }
};

app(yargs.argv);