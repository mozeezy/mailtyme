const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();



app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
