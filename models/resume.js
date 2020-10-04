'user strict';
var sql = require('../db/db');

var Resume = (resume) => {
  this.id = resume.id;
  this.user_id = resume.user_id;
};

Resume.getResumeByUserId = (userId, result) => {
  sql.query("Select id from resume where user_id = ? ", userId,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);

      }
    });
};

module.exports = Resume;