const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(__dirname, "../", "views", "add-product.html")); //Version 1
  // res.sendFile(path.join(rootDir, "views", "add-product.html")); // Version 2
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productsCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  //   products.push({
  //     title: req.body.title,
  //   });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  //   const products = adminData.products;
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Products",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
      layout: false,
    });
  });

  // console.log(adminData.products);
  //res.sendFile(path.join(__dirname, "../", "views", "shop.html")); //Version 1
  // res.sendFile(path.join(rootDir, "views", "shop.html")); // Version 2
};
