CREATE TABLE IF NOT EXISTS questions (
   question_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   department varchar (50) NOT NULL,
   year int,
   semester varchar (50) NOT NULL,
   type varchar(50),
   link varchar(200)
);