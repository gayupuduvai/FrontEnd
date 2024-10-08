const express = require("express");
const {
  addStudent,
  getStudent,
  getStudentById,
  getStudentByIdAndUpdate,
  deleteStudentById,
  login,
  register,
} = require("../controllers/student-controller");
const { authMiddlware } = require("../middleware/auth-middleware");
const { idCheckerMiddleware } = require("../middleware/idChecker-middleware");

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.post("/add", addStudent);

router.get("/get", getStudent);

router.get("/get/:id", idCheckerMiddleware, authMiddlware, getStudentById);

router.patch(
  "/update/:id",
  idCheckerMiddleware,
  authMiddlware,
  getStudentByIdAndUpdate
);

router.delete(
  "/delete/:id",
  idCheckerMiddleware,
  authMiddlware,
  deleteStudentById
);

module.exports = router;