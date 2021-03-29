const express = require("express");
const app = express();

// Logger middleware
function logger(req, res, next) {
  var d = new Date();
  const day = d.getDay();
  const hour = d.getHours();
  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.send("We are available Monday to Friday, from 9 to 17");
  }
}

//Home page creation
app.get("/", logger, (req, res) => {
  res.sendFile(__dirname + "/Public/index.html");
});

//Our services creation
app.get("/services", logger, (req, res) => {
  res.sendFile(__dirname + "/Public/services.html");
});

//Contact us
app.get("/contact", logger, (req, res) => {
  res.sendFile(__dirname + "/Public/contact.html");
});

//server css
app.get("/Public/style.css", (req, res) => {
  res.sendFile(__dirname + "/Public/style.css");
});

// server creation
const port = 5000;
app.listen(port, () => {});
