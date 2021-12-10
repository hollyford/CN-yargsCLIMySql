require("./db/connection");
const yargs = require("yargs");
// const { addBook, listBooks } = require("./book/bookMethods");
const { addUser, listUsers } = require("./user/userMethods")
const { addGenre, listGenres } = require("./genre/genreMethods")
const { addAuthor, listAuthors } = require("./author/authorMethods")


const app = async (args) => {
    switch (process.argv[2]) {
        case "add user":
            addUser({ firstName: args.firstName, lastName: args.lastName })
            break;
        case "list users":
            listUsers();
            break;
        case "add genre":
            addGenre({ genre: args.genre, user: args.user })
            break;
        case "list genres":
            listGenres();
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