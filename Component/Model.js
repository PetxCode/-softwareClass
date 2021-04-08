const mongoose = require("mongoose");

const structure = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: [true, "Your entry has already been used"],
  },
});

module.exports = mongoose.model("lofty", structure);
