module.exports = app => {
  const student = require("../controllers/student.controller.js");
  const feed = require("../controllers/feeds.controller.js");
  const user = require("../controllers/user.controller.js");
  const drive = require("../controllers/drive.controller.js");
  const training = require("../controllers/training.controller.js");
  const notification = require("../controllers/notification.controller.js");
  
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

  //placement drive
  app.post("/drive", drive.create);

  // Retrieve all Drive
  app.get("/drives", drive.findAll);

  //training and workshops
  app.post("/training", training.create);
  // Retrieve all Drive
  app.get("/trainings", training.findAll);

  //placement notification
  app.post("/notification", notification.create);

  // Retrieve all notification
  app.get("/notifications", notification.findAll);
};
