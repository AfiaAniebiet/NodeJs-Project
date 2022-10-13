const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const Router = express.Router();

Router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Products",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
    layout: false,
  });
  // console.log(adminData.products);
  //res.sendFile(path.join(__dirname, "../", "views", "shop.html")); //Version 1
  // res.sendFile(path.join(rootDir, "views", "shop.html")); // Version 2
});

module.exports = Router;
