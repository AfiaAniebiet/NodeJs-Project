const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const Router = express.Router();

Router.get("/", (req, res, next) => {
  console.log(adminData.products);
  //res.sendFile(path.join(__dirname, "../", "views", "shop.html")); //Version 1
  res.sendFile(path.join(rootDir, "views", "shop.html")); // Version 2
});

module.exports = Router;
