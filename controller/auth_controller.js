let database = require("../database");
const { getUserByEmailIdAndPassword } = require("./user_controller");
const path = require("path");
const { default: fetch } = require("node-fetch");
const express = require("express");

let authController = {
  login: (req, res) => {
    res.render("auth/signin");
  },

  register: (req, res) => {
    // check database for user email passed
    let token = false;
    database.forEach(user => {
      if (user.email == req.query.email) {
        console.log("User email match found");
        token = true;
        }
      });
      if (token) {
        res.render("auth/signin");
      } else {
        res.render("auth/register", {
          email: req.query.email,
        });
      }
  },

  registerSubmit: (req, res) => {
    // implement
    let userToAdd = {
      id: database.length + 1,
      email: req.body.email,
      password: req.body.password,
      projects: [],
    };
    //push new user to database
    let flag = 0;
    database.forEach(user => {
      if (userToAdd.email == user.email) {
        flag = 1;
        console.log('User already has this email');
        res.render("auth/register");
        
        }
      });
    if (flag == 0){
      // Push new user to database -- this should be made permanent eventually
      database.push(userToAdd);
      console.log("Thank you for registering!");
      res.render("auth/signin");
    }

  },
};

module.exports = authController;
