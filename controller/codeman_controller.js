let codeManController = {
    welcome: (req, res) => {
        let userName = req.user.name;
        res.render("codeman/welcome", {nameUser: userName});
    },

    create: (req, res) => {
        res.render("codeman/create");
    },
};

module.exports = codeManController;
