const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  //   const products = adminData.products;
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Products",
      path: "/products",
    });
  });

  // console.log(adminData.products);
  //res.sendFile(path.join(__dirname, "../", "views", "shop.html")); //Version 1
  // res.sendFile(path.join(rootDir, "views", "shop.html")); // Version 2
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Cart",
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
  });
};

// exports.adminProducts = (req, res, next) => {
//   res.render("/admin/products", {
//     pageTitle: "Admin Products",
//   });
// };
