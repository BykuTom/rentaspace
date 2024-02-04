const express = require("express");

const userRouter = require(`./routes/userRoutes`);
const propertyRouter = require("./routes/propertyRoutes");

const app = express();

app.use(express.json());
app.use((request, response, next) => {
  request.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/property", propertyRouter);

module.exports = app;
