const express = require("express");
const { connectToDb, getDb } = require("./db");

// init app & middleware
const app = express();

// db connection
let db;

connectToDb((err) => {
  !err
    ? app.listen(3000, () => {
        console.log("app on 3000");
        db = getDb();
      })
    : "";
});

//routes
app.get("/books", (req, res) => {
  let books = [];
  db.collection("books")
    .find()
    .sort({ author: 1 })
    .forEach((book) => books.push(book))
    .then(() => {
      res
        .status(200)
        .json(books)
        .catch(() => {
          res.status(500).json({ error: "could not fetch the documents" });
        });
    });
});