const express = require("express");
const router = express.Router();
const CourseController = require("../Controllers/CourseController");

router.get("/all", CourseController.getAllCourses);
router.post("", CourseController.createCourse);

router.get("/:courseCode", CourseController.getCourseByCode);

module.exports = router;
