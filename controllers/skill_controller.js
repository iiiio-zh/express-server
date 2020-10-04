'use strict';

var skill = require('../models/skill');

exports.read_skills = (req, res) => {
  skill.getAllSkillsByResumeId(req.params.resumeId, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};



