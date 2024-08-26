const express = require("express");
const { addCourse, getCourse } = require("../controllers/course-controller");
const { authMiddlware } = require("../middleware/auth-middleware");
const router = express.Router();

router.post("/add", addCourse);

router.get("/get", authMiddlware, getCourse);

module.exports = router;