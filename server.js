var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
app.use(express.static("public"));
var mongoose = require("mongoose"); 
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/samscraper";
mongoose.connect(MONGODB_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/newsController");
app.use(routes);

app.listen(3000, function() {
    console.log("App running on port 3000!");
  });