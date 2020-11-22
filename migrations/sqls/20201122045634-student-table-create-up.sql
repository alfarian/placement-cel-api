CREATE TABLE IF NOT EXISTS student (
   student_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
   name varchar (50) NOT NULL,
   register_no varchar (50) NOT NULL,
   gender boolean NOT NULL,
   dob date NOT NULL,
   department_id int,
   sem_year int,
   mobile bigint,
   email varchar(50),
   address varchar(200),
   pincode int,
   image text,
   mark10 float(4,2),
   mark12 float(4,2),
   cgpa float(3,2),
   FOREIGN KEY (department_id) REFERENCES department(department_id)
);
