const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide your email"],
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  designation: {
    type: String,
    required: [true, "Please select your designation"],
    enum: {
      values: ["SDE", "MGR", "SSDE", "SMGR"],
      message: "Designation must be either SDE, SSDE, MGR, SMGR",
    },
  },
  location: {
    type: String,
    required: [true, "Please confirm location"],
  },
  dob: {
    type: Date,
    required: [true, "Please confirm date of birth"],
  },
});

userSchema.index({ email: 1 });

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  this.start = Date.now();
  next();
});

userSchema.post(/^find/, function (docs, next) {
  console.log(`Query time:  + ${Date.now() - this.start} ms`);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
