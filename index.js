const express = require("express");
const bodyParser = require("body-parser");
const router = require("./Routers/index");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use("/api/v1", router);

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
