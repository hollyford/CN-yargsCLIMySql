require("./db/connection");
const yargs = require("yargs");
const { addUser, addBook, listBooks } = require("./book/bookMethods");

const app = async (args) => {
    switch (process.argv[2]) {
        case "add user":
            addUser({ firstName: args.firstName, lastName: args.lastName })
            break;
        // case "add":
        //     addBook({ title: args.title, author: args.author, genre: args.genre, rating: args.rating, user: args.user })
        //     break;
        case "list":
            listBooks();
            break;
        default:
            console.log("Incorrect command");
            break;
}};

app(yargs.argv);