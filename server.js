var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/newsController");
app.use(routes);

app.listen(3000, function() {
    console.log("App running on port 3000!");
  });