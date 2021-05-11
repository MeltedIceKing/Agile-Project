module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
        return next();
        }
        res.redirect("/signin");
    },
    forwardAuthenticated: function (req, res, next) {
        if (! req.isAuthenticated()) {
        return next();
        }
        res.redirect("/welcome");
    },
};
