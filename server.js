require('dotenv').config();
let express = require("express");
let app = express();

let indexPath = __dirname + "/views/index.html";
let publicPath = __dirname + "/public";

let jsonObject = { message: "Hello json" };
// app.use(express.static(publicPath));
// app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(indexPath);
});

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    jsonObject.message = jsonObject.message.toUpperCase();
    res.json(jsonObject);
  } else {
    jsonObject.message = "Hello json";
    res.json(jsonObject);
  }
});

app.listen(3000);
// console.log("Hello World");



module.exports = app;
