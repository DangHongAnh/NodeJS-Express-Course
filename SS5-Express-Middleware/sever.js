const express = require("express");
const port = 8000;
const app = express();
const user = {
  userName: "Cao TV",
  passWord: "123",
};

const reqUser = {
  userName: "Cao TV",
  passWord: "123",
};
const middleWareCheckLogin = (req, res, next) => {
  //logic code của middleware
  if (reqUser.userName == user.userName && reqUser.passWord == user.passWord) {
    console.log("login success");
    next();
  } else {
    console.log("login error");
    res.redirect("/login");
  }
};

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});
app.get("/payment", middleWareCheckLogin, (req, res) => {
  res.send("<h1>Pay Page</h1>");
});
app.get("/login", (req, res) => {
  res.send("<h1>Login page</h1>");
});
app.listen(port, () => {
  console.log("http://localhost:8000/", port);
});
