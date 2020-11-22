const Notification = require("../models/notification.model.js");

// Create and Save a new notification
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  // Create a Notification
  const notification = new Notification({
    name: req.body.name,
    details: req.body.details,
  });

  // Save notification in the database
  Notification.create(notification, (err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the notification."
      });
    else res.json(data);
  });
};

// Retrieve all notification from the database.
exports.findAll = (req, res) => {
  Notification.getAll((err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving notification."
      });
    else res.json(data);
  });
};
