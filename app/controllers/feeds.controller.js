const Feed = require("../models/feeds.model.js");

// Create and Save a new Feed
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  // Create a Feed
  const feed = new Feed({
    content: req.body.content,
  });

  // Save Feed in the database
  Feed.create(feed, (err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the Feed."
      });
    else res.status(200).json({
      message: "Success"
    });
  });
};

// Retrieve all Feeds from the database.
exports.findAll = (req, res) => {
  Feed.getAll((err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving feeds."
      });
    else res.json(data);
  });
};

