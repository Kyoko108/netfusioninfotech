const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userschema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      length: 3,
    },
  },
  {
    timestamp: true,
  }
);
const User = mongoose.model("User", userschema);
module.exports = User;
