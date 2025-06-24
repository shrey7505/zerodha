// models/userSchema.js
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// Define schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // username and password handled by passport-local-mongoose
});

// Add plugin
userSchema.plugin(passportLocalMongoose);

// Export schema only
module.exports = userSchema;
