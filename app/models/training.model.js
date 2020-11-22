const sql = require("./db.js");

// constructor
const Training = function(training) {
  this.id = training.id;
  this.name = training.name;
  this.details = training.details;
};

Training.create = (newTraining, result) => {
  sql.query(`INSERT INTO training (
    name,
    details
    ) VALUES (?,?)`, [
      newTraining.name,
      newTraining.details,
    ], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created drive: ", newTraining);
    result(null, {result: "Success"} );
  });
};


Training.getAll = (result) => {
  sql.query(`select * from training`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("training: ", res);
    result(null, res);
  });
};

module.exports = Training;
