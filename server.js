const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;
const personnel = require("./app/data/personnel.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./app/public")));

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app, personnel);

app.listen(PORT, function() {
    console.log(`Listening on PORT: ${PORT}`);
});