const mongoose = require("mongoose");

const RsvpSchema = new mongoose.Schema(
  {
    who: String,
    go: String,
    name: String,
    num: Number,
    sNum: Number,
    food: String,
  },
  { Collection: "rsvp" }
);

const Rsvp = mongoose.model("Rsvp", RsvpSchema);

module.exports = { Rsvp };
