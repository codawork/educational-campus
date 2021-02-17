const User = require("../Models/User");

exports.getAllUsers = async (req, res) => {
  res.json(await User.find().populate("courses"));
};

exports.findById = async (req, res) => {
  const user = await User.findById(req.params.userId).populate("courses");
  res.json(user);
};

exports.createUser = async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.addCourse = async (req, res) => {
  const courseId = req.body.courseId;
  const userId = req.body.userId;
  const user = await User.findById(userId);
  user.courses.push(courseId);
  await user.save();
  res.json(user);
};
