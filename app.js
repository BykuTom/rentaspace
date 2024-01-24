const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.status(200).send("GET METHOD RECIEVED");
});

app.post("/", (request, response) => {
  response.status(200).send("POST METHOD RECIEVED");
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
