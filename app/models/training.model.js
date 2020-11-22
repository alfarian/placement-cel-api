const sql = require("./db.js");

// constructor
const Training = function(training) {
  this.id = training.id;
  this.name = training.name;
  this.details = training.details;
};

Training.create = (newTrain, result) => {
  sql.query(`INSERT INTO training (
    name,
    details
    ) VALUES (?,?)`, [
      newTrain.name,
      newTrain.details,
    ], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created drive: ", newTrain);
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
