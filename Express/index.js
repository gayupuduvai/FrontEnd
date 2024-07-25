const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

const students = [];

// Middleware to parse JSON request bodies
app.use(express.json());
app.use((req, res, next) => {
//   console.log("middleware called");
//   res.send("closed");
  next();
});

app.get("", (req, res) => {
    res.send ("Welcome to express");
});

// 1. Creating a student data by using get and post

// app.get("/student", (req, res) => {
//     res.send ({
//         status: "success", 
//         message: "Fetched students",
//         data: students,
//     });
// });
// app.post("/student", (req, res) => {
//     console.log(req.body);
//     res.send("Student added successfully");
// });

// 2. Creating and storing student data in file system method
app.get("/home", (req, res) => {
    res.send ("Welcome to Home");
});
app.get("/student", (req, res) => {
    const students = JSON.parse(fs.readFileSync("student.json", "utf8"));
    try {
      if (students.length > 0) {
        res.send({
          status: "success",
          message: "Fetched students",
          data: students,
        });
      } else {
        res
          .status(200)
          .send({ status: "error", message: "No students found", data: null });
      }
    } catch (error) {
      console.log("Error", error.message);
      res.status(500).send({ status: "error", message: error.message });
    }
  });

app.post("/student", (req, res) => {
    console.log(req.body);
    res.send("Student added successfully");
    try {
      const students = fs.readFileSync("student.json", "utf8");
      if (students === "") {
        fs.writeFile("student.json", JSON.stringify([req.body]), () => {});
      } else {
        fs.writeFile(
          "student.json",
          JSON.stringify([...JSON.parse(students), req.body]),
          () => {}
        );
      }
      res.send({ status: "success", message: "Student added successfully" });
    } catch (error) {
      console.log("Error", error.message);
      res.status(500).send({ status: "error", message: error.message });
    }
  });

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});