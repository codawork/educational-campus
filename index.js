const app = require("./app");
const User = require("./Models/User");
const Course = require("./Models/Course");
app.get("/", (req, res) => {
  res.json({ message: user });
});
