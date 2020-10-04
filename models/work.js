'user strict';
var sql = require('../db/db');

//Task object constructor
var Work = (work) => {
  this.id = work.id;
  this.resume_id = work.resume_id;
  this.company = work.company;
  this.title = work.title;
  this.start_year = work.start_year;
  this.end_year = work.end_year;
  this.description = work.description;
};

Work.getAllWorkByResumeId = (resumeId, result) => {
  sql.query("Select company, title, start_year, end_year, description from work where resume_id = ? ", resumeId,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);

      }
    });
};

module.exports = Work;