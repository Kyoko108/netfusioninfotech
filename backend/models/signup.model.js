const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const signupSchema = new Schema(
  {
    username: { type: String, required: true },
    password: {},
    email: {},
  },
  {
    timestamps: true,
  }
);
const Signup = mongoose.model("Signup", signupSchema);
module.exports = Signup;
