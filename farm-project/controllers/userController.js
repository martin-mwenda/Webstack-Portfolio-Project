const User = require('../models/user');
const { createSuccessResponse, createErrorResponse } = require('../utils/responseHandler');

// Create a new user
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(createSuccessResponse("User created successfully", user));
  } catch (err) {
    res.status(400).json(createErrorResponse("Failed to create user", err.message));
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(createSuccessResponse("Users retrieved successfully", users));
  } catch (err) {
    res.status(400).json(createErrorResponse("Failed to retrieve users", err.message));
  }
};

// Update user by ID
const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json(createErrorResponse("User not found"));
    }
    res.status(200).json(createSuccessResponse("User updated successfully", user));
  } catch (err) {
    res.status(400).json(createErrorResponse("Failed to update user", err.message));
  }
};

// Delete user by ID
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json(createErrorResponse("User not found"));
    }
    res.status(200).json(createSuccessResponse("User deleted successfully"));
  } catch (err) {
    res.status(400).json(createErrorResponse("Failed to delete user", err.message));
  }
};

module.exports = { createUser, getUsers, updateUser, deleteUser };
