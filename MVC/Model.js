const mongoose = require("mongoose");

const structure = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("monies", structure);
