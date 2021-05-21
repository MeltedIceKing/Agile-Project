let database = require("../database");

const userModel = {
    findOne: (email) => {
        console.log(database);
        const user = database.find((user) => user.email === email);
        if (user) {
        return user;
        }
        return null;
    },

    findById: (id) => {
        console.log(database);
        const user = database.find((user) => user.id === id);
        if (user) {
            return user;
        }
        return null;
    },
};

module.exports = { database, userModel };
