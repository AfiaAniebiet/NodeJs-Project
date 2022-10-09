const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  next();
});

app.use((req, res, next) => {
  res.send("<h1>In the middleware</h1>");
});

app.listen(3000);
