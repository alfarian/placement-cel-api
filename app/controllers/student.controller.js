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
    register_no: req.body.register_no,
    gender: req.body.gender,
    dob: req.body.dob,
    department_id: req.body.department_id,
    sem_year: req.body.sem_year,
    mobile: req.body.mobile,
    email: req.body.email,
    address: req.body.address,
    pincode: req.body.pincode,
    mark10: req.body.mark10,
    mark12: req.body.mark12,
    cgpa: req.body.cgpa,
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

