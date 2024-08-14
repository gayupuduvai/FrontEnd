const mongoose = require("mongoose");

const studentScheme = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  // name: { type: String, required: true },
  // age: { type: Number, required: true },
  // skills: { type: Array, required: true },
  // location: { type: String, required: false },
});

const myDB = mongoose.connection.useDb("Mongodb_Practice");

const StudentModel = myDB.model("student", studentScheme);

module.exports = { StudentModel };