require("./db/connection");
const yargs = require("yargs");
const { addBook, listBooks } = require("./book/bookMethods");
const { addUser, listUsers } = require("./user/userMethods")


const app = async (args) => {
    switch (process.argv[2]) {
        case "add user":
            addUser({ firstName: args.firstName, lastName: args.lastName })
            break;
        case "list users":
            listUsers();
            break;
        // case "add":
        //     addBook({ title: args.title, author: args.author, genre: args.genre, rating: args.rating, user: args.user })
        //     break;
        // case "list books":
        //     listBooks();
        //     break;
        default:
            console.log("Incorrect command");
            break;
}};

app(yargs.argv);