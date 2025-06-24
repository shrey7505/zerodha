const mongoose = require("mongoose");
const userSchema = require("../schemas/userSchema");

// Create and export model
const User = mongoose.model("User", userSchema);

module.exports = User;