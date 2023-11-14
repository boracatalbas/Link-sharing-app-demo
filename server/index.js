const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const LinkModel = require("./models/Links");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/devlinks");

app.get("/", (req, res) => {
  LinkModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/createlinks", (req, res) => {
  LinkModel.create(req.body)
    .then((links) => res.json(links))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is running");
});
