module.exports = app => {
  const student = require("../controllers/student.controller.js");
  const feed = require("../controllers/feeds.controller.js");
  const user = require("../controllers/user.controller.js");

  // Create a new Student
  app.post("/student", student.create);

  // Retrieve all Students
  app.get("/students", student.findAll);

  // Retrieve a single Student with studentId
  app.get("/student/:studentId", student.findOne);

  // Update a Student with studentId
  app.put("/student/:studentId", student.update);

  // Delete a Student with studentId
  app.delete("/student/:studentId", student.delete);

  // Create a new Feed
  app.post("/feed", feed.create);

  // Retrieve all Feeds
  app.get("/feeds", feed.findAll);

  // Sign up
  app.post("/user/register", user.create);

  // Login
  app.post("/user/login", user.login);
};
