const sql = require("./db.js");

// constructor
const Notification = function(notification) {
  this.id = notification.id;
  this.name = notification.name;
  this.details = notification.details;
};

Notification.create = (newNotification, result) => {
  sql.query(`INSERT INTO notifications (
    name,
    details
    ) VALUES (?,?)`, [
      newNotification.name,
      newNotification.details,
    ], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created notification: ", newNotification);
    result(null, {result: "Success"} );
  });
};


Notification.getAll = (result) => {
  sql.query(`select * from notifications`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("notification: ", res);
    result(null, res);
  });
};

module.exports = Notification;
