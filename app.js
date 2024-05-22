const express = require("express");

const app = express();

const checkAuth = (req, res, next) => {
  console.log("she is admin permission");
  next();
};

const checkToken = (req, res, next) => {
  console.log("you have token");
  next();
};

const getUser = (req, res) => {
  console.log("here is user info");
  res.send("here is user info");
};

app.get("/users", checkAuth, checkToken, getUser);

app.listen(5000, () => {
  console.log("server is on 5000");
});
