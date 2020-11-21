const User = require("../models/user.model.js");

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.json(data);
  });
};


// Find a single User with a username and pass
exports.login = (req, res) => {
     // Validate request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });
  User.login(user, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).json({
          message: `Not found User with id ${req.params.email}.`
        });
      } else {
        res.status(500).json({
          message: "Error retrieving User with email " + req.params.email
        });
      }
    } else res.json(data);
  });
};
