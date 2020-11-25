const Question = require("../models/question.model.js");

// Create and Save a new question
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not be empty!"
    });
  }

  // Create a Question
  const question = new Question({
    department: req.body.department,
    year: req.body.year,
    semester: req.body.semester,
    type: req.body.type,
    link: req.body.link,
  });

  // Save question in the database
  Question.create(question, (err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the question."
      });
    else res.json(data);
  });
};

// Retrieve all question from the database.
exports.findAll = (req, res) => {
  Question.getAll((err, data) => {
    if (err)
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving question."
      });
    else res.json(data);
  });
};
