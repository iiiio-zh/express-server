'user strict';
var sql = require('../db/db');

//Task object constructor
var Skill = (skill) => {
  this.name = skill.name;
  this.level = skill.level;
};

Skill.getAllSkillsByResumeId = (resumeId, result) => {
  sql.query("Select name, level from skill where resume_id = ? ", resumeId,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);

      }
    });
};

module.exports = Skill;