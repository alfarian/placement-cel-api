const Drive = require("../models/drive.model.js");

// Create and Save a new drive
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  // Create a Drive
  const drive = new Drive({
    name: req.body.name,
    details: req.body.details,
  });

  // Save drive in the database
  Drive.create(drive, (err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the drive."
      });
    else res.json(data);
  });
};

// Retrieve all drive from the database.
exports.findAll = (req, res) => {
  Drive.getAll((err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving drive."
      });
    else res.json(data);
  });
};
