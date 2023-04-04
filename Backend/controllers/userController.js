const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { fullname, phone, childName, childSex, email, passeword } = req.body;

  if (!fullname || !phone || !childName || !childSex || !email || !passeword) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  res.json({ message: "Register User" });
});

// @desc    authentificate a user
// @route   POST /api/users
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

// @desc    getMe
// @route   GET /api/users
// @access  Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "user data display" });
});
module.exports = {
  registerUser,
  loginUser,
  getMe,
};
