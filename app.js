// Importing NodeJs Core Modules
// const http = require("http");
const path = require("path");

// Importing third -party applications
const express = require("express");
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars");

// Local files imports
// const adminData = require("./routes/admin");
const adminRoutes = require("./routes/admin");
const shopRoute = require("./routes/shop");
const errorController = require("./controllers/error");

const app = express();

// setting templating engine - ejs
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/admin", adminData.routes);
app.use("/admin", adminRoutes);
app.use(shopRoute);
app.use(errorController.errorPage);

app.listen(3000);
