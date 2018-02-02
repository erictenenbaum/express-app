var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var PORT = 3000;

var port = process.env.PORT || 3000;

// require("./routes/htmlRoutes.js")(app);

var htmlRoutes = require("./routes/htmlRoutes.js");

htmlRoutes(app);

require("./routes/apiRoutes.js")(app);

app.listen(port, function() {
  console.log("App listening on PORT " + PORT);
});