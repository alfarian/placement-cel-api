const sql = require("./db.js");

// constructor
const Student = function(student) {
  this.id = student.id;
  this.name = student.name;
  this.register_no = student.register_no;
  this.gender = student.gender;
  this.dob = student.dob;
  this.department_id = student.department_id;
  this.sem_year = student.sem_year;
  this.mobile = student.mobile;
  this.email = student.email;
  this.address = student.address;
  this.pincode = student.pincode;
  this.mark10 = student.mark10;
  this.mark12 = student.mark12;
  this.cgpa = student.cgpa;
};

Student.create = (newStudent, result) => {
  sql.query(`INSERT INTO student (
    name,
    register_no,
    gender,
    dob,
    department_id,
    sem_year,
    mobile,
    email,
    address,
    pincode,
    mark10,
    mark12,
    cgpa
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`, [
      newStudent.name,
      newStudent.register_no,
      newStudent.gender,
      newStudent.dob,
      newStudent.department_id,
      newStudent.sem_year,
      newStudent.mobile,
      newStudent.email,
      newStudent.address,
      newStudent.pincode,
      newStudent.mark10,
      newStudent.mark12,
      newStudent.cgpa,
    ], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created student: ", newStudent);
    result(null, {result: "Success"} );
  });
};

Student.findById = (studentId, result) => {
  sql.query(`SELECT * FROM student WHERE student_id = ${studentId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found student: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Student with the id
    result({ kind: "not_found" }, null);
  });
};

Student.getAll = (result) => {
  sql.query("SELECT * FROM student", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("student: ", res);
    result(null, res);
  });
};

Student.updateById = (id, student, result) => {
  sql.query(
    "UPDATE student SET name = ? WHERE student_id = ?",
    [student.name, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Student with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated student: ", { id: id, ...student });
      result(null, { id: id, ...student });
    }
  );
};

Student.remove = (id, result) => {
  sql.query("DELETE FROM student WHERE student_id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Student with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted student with id: ", id);
    result(null, res);
  });
};

module.exports = Student;
