const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UserController");

router.get("/all", UserController.getAllUsers);
router.get("/:userId", UserController.findById);
router.post("/add/course", UserController.addCourse);
router.post("", UserController.createUser);

module.exports = router;
