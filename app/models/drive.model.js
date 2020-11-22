const sql = require("./db.js");

// constructor
const Drive = function(drive) {
  this.id = drive.id;
  this.name = drive.name;
  this.details = drive.details;
};

Drive.create = (newDrive, result) => {
  sql.query(`INSERT INTO placement_drive (
    name,
    details
    ) VALUES (?,?)`, [
      newDrive.name,
      newDrive.details,
    ], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created drive: ", newDrive);
    result(null, {result: "Success"} );
  });
};


Drive.getAll = (result) => {
  sql.query(`select * from placement_drive`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("drive: ", res);
    result(null, res);
  });
};

module.exports = Drive;
