const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A User must have a name"],
    unique: [true, "User Name already exists"],
  },
  email: {
    type: String,
    required: [true, "User must have an email"],
    unique: [true, "User email already exists"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
