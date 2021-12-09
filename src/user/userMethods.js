const { User } = require("./userModels")

exports.addUser = async (userObj) => {
    try {
        await User.sync();
        await User.create(userObj);
        return `Successfully added ${userObj.firstName} as a user`;
    } catch (error) {
        console.log(error);
    }
};

exports.listUsers = async () => {
    try {
        const all = await User.findAll({})
        all.forEach(item => {console.log(`${item.userId} ${item.firstName} ${item.lastName}`)});
    } catch (error) {
        console.log(error)
    }
}

