const mongoose = require("mongoose");

const GuestbookSchema = new mongoose.Schema(
  {
    name: String,
    content: String,
    password: String,
    postNum: Number,
  },
  { Collection: "guestbooks", timestamps: true }
);

const Guestbook = mongoose.model("Guestbook", GuestbookSchema);

module.exports = { Guestbook };
