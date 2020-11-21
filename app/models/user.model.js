const sql = require("./db.js");

// constructor
const User = function(user) {
  this.email = user.email;
  this.password = user.password;
};

User.create = (newUser, result) => {
  sql.query(`INSERT INTO user (email, password) VALUES (?, ?)`, [newUser.email, newUser.password], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created new user: ", { id: res.insertId, ...newUser });
    result(null, { status:"success" });
  });
};

User.login = (user, result) => {
  sql.query(`SELECT 1 FROM user WHERE email = ? AND password = ?`, [user.email, user.password], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found user: ", user.email);
      result(null, {status:"success"});
      return;
    }

    // not found User with the email
    result({ kind: "not_found" }, null);
  });
};

module.exports = User;
