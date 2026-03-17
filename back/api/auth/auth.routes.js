const express = require("express")
const auth = express.Router()
const {register,login,logout} = require("./auth.controllers")

auth.post("/register",register)
auth.post("/login",login);
auth.get("/logout",logout);


module.exports = auth;