const mongoose = require("mongoose");
const LinkSchema = new mongoose.Schema(
  {
    platform: { type: String, required: true },
    linkler: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("links", LinkSchema);
