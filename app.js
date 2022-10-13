// Importing NodeJs Core Modules
const http = require("http");
const path = require("path");

// Importing third -party applications
const express = require("express");
const bodyParser = require("body-parser");

// Local files imports
const adminData = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
