CREATE TABLE IF NOT EXISTS department(
   department_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   department_name varchar(50) NOT NULL UNIQUE
);
