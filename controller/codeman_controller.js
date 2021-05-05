let codeManController = {
    welcome: (req, res) => {
        res.render("codeman/welcome")
    },

    create: (req, res) => {
        res.render("codeman/create")
    }
};

module.exports = codeManController;
