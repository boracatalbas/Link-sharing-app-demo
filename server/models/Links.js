const mongoose = require("mongoose");
const LinkSchema = new mongoose.Schema({
  platform: String,
  links: String,
});
const LinkModel = mongoose.model("links", LinkSchema);
module.exports = LinkModel;
