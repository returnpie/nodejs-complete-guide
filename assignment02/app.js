const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("always apply");
  next();
});

app.use("/user", (req, res, next) => {
  console.log("second");
  res.send("<h1>/user</h1>");
});

app.use("/", (req, res, next) => {
  console.log("second");
  res.send("<h1>/</h1>");
});

app.listen(3000);
