const express = require("express");
const app = express();
const mongoose = require("mongoose");
const product = require("./models/productModels");
const Product = require("./models/productModels");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello node Api");
});

app.get("/blog", (req, res) => {
  res.send("Complete FullStack");
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.msg);
    res.status(500).json({ msg: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://admin:9843722208@cluster0.4jnjaa5.mongodb.net/NodeApi?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("api with express,node and mongoDB running on Port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
