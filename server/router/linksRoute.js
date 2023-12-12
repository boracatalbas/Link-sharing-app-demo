const express = require("express");
const Link = require("../models/linkModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const links = await Link.find({});

    return res.status(200).json({
      count: links.lenght,
      data: links,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message }); //A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const link = await Link.findById(id);

    return res.status(200).json(link);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  if (!req.body.platform || !req.body.linkler) {
    return res.status(400).send({
      message: "send all req fields",
    });
  }
  const newLink = {
    linkler: req.body.linkler,
    platform: req.body.platform,
  };
  const link = await Link.create(newLink);

  return res.status(201).send(link); //The request has been fulfilled, resulting in the creation of a new resource
});
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.platform || !req.body.linkler) {
      return res.status(400).send({
        message: "send all required fields: link, platform", //The request has been fulfilled, resulting in the creation of a new resource
      });
    }
    const { id } = req.params;
    const res = await Link.findByIdAndUpdate(id, req.body);
    if (!res) {
      return res.status(404).json({ message: "Link not found" });
    }
    return res.status(200).send({ message: "Link updated successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const res = await Link.findByIdAndDelete(id);
    if (!res) {
      return res.status(404).json({ message: "Link not found" });
    }
    return res.status(200).send({ message: "Link deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});
module.exports = router;
