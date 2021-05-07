let codeManController = {
    welcome: (req, res) => {
        res.render("codeman/welcome")
    },

    create: (req, res) => {
        res.render("codeman/create")
    },

    signin: (req, res) => {
        res.render("codeman/signin")
    },
};

module.exports = codeManController;
