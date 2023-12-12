require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const linksRoute = require("./router/linksRoute");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("welcome to mern");
});

app.use("/devlinks", linksRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("app connected to db");
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening on port", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
