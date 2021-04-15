const User = require("../models/userModel");
const ApiFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

exports.addUser = catchAsync(async (req, res, next) => {
  const { email, designation, location, dob } = req.body;
  const user = await User.create({
    email,
    designation,
    location,
    dob,
  });
  res.status(200).json({ status: "success", user });
});

exports.checkUserEmail = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const result = await User.find({ email });
  res.status(200).json({ exists: result.length ? true : false });
});

exports.getAll = catchAsync(async (req, res, next) => {
  const { email } = req.params;
  const { designation } = req.query;
  let results;
  let matchObj = designation || email ? {} : undefined;
  if (designation) {
    if (Array.isArray(designation)) {
      matchObj.designation = { $in: designation };
    } else {
      matchObj.designation = designation;
    }
  }
  if (email) {
    matchObj.email = { $regex: email };
  }
  if (matchObj) {
    results = await User.aggregate([{ $match: matchObj }, { $count: "count" }]);
  } else {
    results = await User.aggregate([{ $count: "count" }]);
  }
  const modelu = email ? User.find({ email: { $regex: email } }) : User.find();
  const features = new ApiFeatures(modelu, req.query)
    .filter()
    .sort()
    .pagination();
  const users = await features.query;
  res.status(200).json({
    status: "success",
    users,
    count: results.length > 0 ? results[0].count : 0,
  });
});

exports.editUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ status: "success", user });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({ status: "success" });
});
