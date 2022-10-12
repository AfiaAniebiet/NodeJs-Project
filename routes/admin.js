const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const Router = express.Router();

const products = [];

Router.get("/add-product", (req, res, next) => {
  //res.sendFile(path.join(__dirname, "../", "views", "add-product.html")); //Version 1
  res.sendFile(path.join(rootDir, "views", "add-product.html")); // Version 2
});

Router.post("/add-product", (req, res, next) => {
  products.push({
    fullName: req.body.fullName,
    title: req.body.title,
  });
  res.redirect("/");
});

exports.routes = Router;
exports.products = products;
