const mongoose = require("mongoose");

const CounterSchema = new mongoose.Schema(
  {
    counter: String,
    postNum: Number,
  },
  { Collection: "counter" }
);

const Counter = mongoose.model("Counter", CounterSchema);

module.exports = { Counter };
