const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  console.log(`My name is ${firstName} ${lastName} and my email is ${email}`);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
