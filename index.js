const express = require("express");
const app = express();
const path = require("path");
const ejsLayouts = require("express-ejs-layouts");
const codemanController = require("./controller/codeman_controller");

// This starts a session
const session = require("express-session");
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
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.set("view engine", "ejs");

// Routes
app.get("/codeman", codemanController.welcome)

app.listen(3001, function () {
    console.log(
        "Server running. Visist localhost:3001/codeman in your browser"
    );
});