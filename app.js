const express = require("express");

const userRouter = require(`./routes/userRoutes`);

const app = express();

app.use((request, response, next) => {
  request.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/users", userRouter);

module.exports = app;
