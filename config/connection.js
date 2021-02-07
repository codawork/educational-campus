const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/educational-campus", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("open", () => {
  console.log("Mongo connection successful");
});
mongoose.connection.on("error", () => {
  console.log("Mongo connection unsuccessful");
});
