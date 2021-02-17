const app = require("./app");

app.use("/courses", require("./Routers/courseRoutes"));
app.use("/users", require("./Routers/userRoutes"));
