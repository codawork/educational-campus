const Course = require("../Models/Course");

exports.getAllCourses = async (req, res) => {
  const courseList = await Course.find({ id: null });
  res.json(courseList);
};

exports.getCourseByCode = async (req, res) => {
  const course = await Course.findByCode(req.params.courseCode);
  res.json(course);
};

exports.createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.json(course);
  } catch (e) {
    res.status(400).send();
  }
};
