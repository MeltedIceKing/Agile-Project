const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const codemanController = require("./controller/codeman_controller");
const passport = require("./middleware/passport")
const authController = require("./controller/auth_controller");
const { ensureAuthenticated, forwardAuthenticated } = require("./middleware/checkAuth");

// This starts a session
const session = require("express-session");
const codeManController = require("./controller/codeman_controller");
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(ejsLayouts);
app.set("view engine", "ejs");

// Routes
app.get("/welcome", ensureAuthenticated, codemanController.welcome);

app.get("/create", ensureAuthenticated, codeManController.create);

app.post("/create/created", ensureAuthenticated, codeManController.created);

// Passport Routes
app.get("/register", authController.registerSubmit);

app.get("/signin", forwardAuthenticated, (req, res) => {
  res.render("auth/signin");
});

app.post("/signin", passport.authenticate("local", {
  successRedirect: "/welcome",
  failureRedirect: "/signin",
}));

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = app
