const app = require("./app");

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});
