const mongoose = require("mongoose");
const express = require("express");
const { type } = require("os");
const app = express();
const port = 3000;

app.use(express.json());

const uri = "mongodb+srv://gayupuduvai:Dh9oetskP54MT8DK@cluster0.0bdokus.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
  }
}
run().catch(console.dir);

// model

const studentScheme = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    location: {type: String, required: true},
});

const myDB = mongoose.connection.useDb("Mongodb_Practice");

const StudentModel = myDB.model("student", studentScheme);

app.post("/add-student", async (req, res) => {
  try {
    const student = await StudentModel(req.body);

    await student.save();

    res
      .status(201)
      .json({ status: "success", message: "Student added successfully" });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
});

app.get("/get-students", async (req, res) => {
  try {
    const students = await StudentModel.find();

    res.status(201).json({
      status: "success",
      message: "Student added successfully",
      data: students,
    });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
});
app.get("/", async (req, res) => {
  try {
    const students = await StudentModel.find();

    res.status(201).json({
      status: "success",
      message: "Student added successfully",
      data: students,
    });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});