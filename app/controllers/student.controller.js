const Student = require("../models/student.model.js");

// Create and Save a new Student
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  // Create a Student
  const student = new Student({
    name: req.body.name,
  });

  // Save Student in the database
  Student.create(student, (err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the Student."
      });
    else res.json(data);
  });
};

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
  Student.getAll((err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving students."
      });
    else res.json(data);
  });
};

// Find a single Student with a studentId
exports.findOne = (req, res) => {
  Student.findById(req.params.studentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).json({
          message: `Not found Student with id ${req.params.studentId}.`
        });
      } else {
        res.status(500).json({
          message: "Error retrieving Student with id " + req.params.studentId
        });
      }
    } else res.json(data);
  });
};

// Update a Student identified by the studentId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Student.updateById(
    req.params.studentId,
    new Student(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).json({
            message: `Not found Student with id ${req.params.studentId}.`
          });
        } else {
          res.status(500).json({
            message: "Error updating Student with id " + req.params.studentId
          });
        }
      } else res.json(data);
    }
  );
};

// Delete a Student with the specified studentId in the request
exports.delete = (req, res) => {
  Student.remove(req.params.studentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).json({
          message: `Not found Student with id ${req.params.studentId}.`
        });
      } else {
        res.status(500).json({
          message: "Could not delete Student with id " + req.params.studentId
        });
      }
    } else res.json({ message: `Student was deleted successfully!` });
  });
};

