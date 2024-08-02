const express = require("express");
const uuid = require("uuid");
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
// app.get("/student", (req, res) => {
//     const students = JSON.parse(fs.readFileSync("student.json", "utf8"));
//     try {
//       if (students.length > 0) {
//         res.send({
//           status: "success",
//           message: "Fetched students",
//           data: students,
//         });
//       } else {
//         res
//           .status(200)
//           .send({ status: "error", message: "No students found", data: null });
//       }
//     } catch (error) {
//       console.log("Error", error.message);
//       res.status(500).send({ status: "error", message: error.message });
//     }
//   });
  app.get("/get-students", (req, res) => {
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
  
// app.post("/student", (req, res) => {
//     console.log(req.body);
//     res.send("Student added successfully");
//     try {
//       const students = fs.readFileSync("student.json", "utf8");
//       if (students === "") {
//         fs.writeFile("student.json", JSON.stringify([req.body]), () => {});
//       } else {
//         fs.writeFile(
//           "student.json",
//           JSON.stringify([...JSON.parse(students), req.body]),
//           () => {}
//         );
//       }
//       res.send({ status: "success", message: "Student added successfully" });
//     } catch (error) {
//       console.log("Error", error.message);
//       res.status(500).send({ status: "error", message: error.message });
//     }
//   });
app.post("/add-student", (req, res) => {
  try {
    const students = fs.readFileSync("student.json", "utf8");
    const newObj = { id: uuid.v4(), ...req.body };
    if (students === "") {
      fs.writeFile("student.json", JSON.stringify([newObj]), () => {});
    } else {
      fs.writeFile(
        "student.json",
        JSON.stringify([...JSON.parse(students), newObj]),
        () => {}
      );
    }
    res.send({ status: "success", message: "Student added successfully" });
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).send({ status: "error", message: error.message });
  }
});

app.post("/add-students", (req, res) => {
  try {
    const students = fs.readFileSync("student.json", "utf8");
    const listOfStudents = req.body.map((student) => {
      return { id: uuid.v4(), ...student };
    });
    if (students === "") {
      fs.writeFile("student.json", JSON.stringify(listOfStudents), () => {});
    } else {
      fs.writeFile(
        "student.json",
        JSON.stringify([...JSON.parse(students), listOfStudents]),
        () => {}
      );
    }
    res.send({ status: "success", message: "Student added successfully" });
  } catch (error) {
    console.log("Error", error.message);
    res.status(500).send({ status: "error", message: error.message });
  }
});

  app.delete("/delete-student/:id", (req, res) => {
    try {
      const { id } = req.params;
      const students = fs.readFileSync("student.json", "utf8");
      if (students === "") {
        return res.send({ status: "error", message: "No data found" });
      } else {
        const updatedStudents = JSON.parse(students).filter(
          (student) => student.id !== id
        );
        fs.writeFile("student.json", JSON.stringify(updatedStudents), () => {});
        res.send({ status: "success", message: "Student deleted successfully" });
      }
    } catch (error) {
      console.log("Error", error.message);
      res.status(500).send({ status: "error", message: error.message });
    }
  });
  
  app.put("/update-student/:id", (req, res) => {
    try {
      const { id } = req.params;
      const students = fs.readFileSync("student.json", "utf8");
      if (students === "") {
        return res.send({ status: "error", message: "No data found" });
      } else {
        const updatedStudents = JSON.parse(students).map((student) => {
          if (student.id === id) {
            return { ...student, ...req.body };
          }
          return student;
        });
        fs.writeFile("student.json", JSON.stringify(updatedStudents), () => {});
        res.send({ status: "success", message: "Student updated successfully" });
      }
    } catch (error) {
      console.log("Error", error.message);
      res.status(500).send({ status: "error", message: error.message });
    }
  });

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});