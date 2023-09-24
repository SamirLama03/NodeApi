const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("Hello node Api");
});

app.listen(3000, () => {
  console.log("api with express,node and mongoDB running on Port 3000");
});
