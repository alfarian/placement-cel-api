const sql = require("./db.js");

// constructor
const Feed = function(feed) {
  this.id = feed.id;
  this.content = feed.content;
};

Feed.create = (newFeed, result) => {
  sql.query("INSERT INTO feeds (content) VALUES (?)", newFeed.content, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created new feed: ", { id: res.insertId, ...newFeed });
    result(null, { id: res.insertId, ...newFeed });
  });
};

Feed.getAll = (result) => {
  sql.query("SELECT feed_id, content FROM feeds", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("feed: ", res);
    result(null, res);
  });
};

module.exports = Feed;
