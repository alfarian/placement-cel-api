const sql = require("./db.js");

// constructor
const Question = function(question) {
  this.id = question.id;
  this.department = question.department;
  this.year = question.year;
  this.semester = question.semester;
  this.type = question.type;
  this.link = question.link;
};

Question.create = (newQuestion, result) => {
  sql.query(`INSERT INTO questions (
    department,
    year,
    semester,
    type,
    link
    ) VALUES (?,?,?,?,?)`, [
      newQuestion.department,
      newQuestion.year,
      newQuestion.semester,
      newQuestion.type,
      newQuestion.link,
    ], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created question: ", newQuestion);
    result(null, {result: "Success"} );
  });
};


Question.getAll = (result) => {
  sql.query(`select * from questions`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("question: ", res);
    result(null, res);
  });
};

module.exports = Question;
