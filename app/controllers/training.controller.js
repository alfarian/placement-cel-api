const Training = require("../models/training.model.js");

// Create and Save a new training
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  // Create a training
  const training = new Training({
    name: req.body.name,
    details: req.body.details,
  });

  // Save drive in the database
  Training.create(training, (err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the drive."
      });
    else res.json(data);
  });
};

// Retrieve all training from the database.
exports.findAll = (req, res) => {
  Training.getAll((err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving drive."
      });
    else res.json(data);
  });
};
