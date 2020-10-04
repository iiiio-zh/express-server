'user strict';
var sql = require('../db/db');

//Task object constructor
var Education = (education) => {
  this.id = education.id;
  this.resume_id = education.resume_id;
  this.school = education.school;
  this.details = education.details;
  this.description = education.description;
  this.graduated_date = education.graduated_date;
};

Education.getAllEducationByResumeId = (resumeId, result) => {
  sql.query("Select school, details, description, graduated_date from education where resume_id = ? ", resumeId,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);

      }
    });
};

module.exports = Education;