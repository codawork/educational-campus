const express = require("express");
const app = express();
require("./config/connection");
app.listen(3000, () => {
  console.log("Listen on port: " + 3000);
});

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

module.exports = app;
