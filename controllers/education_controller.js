'use strict';

var education = require('../models/education');

exports.read_education = (req, res) => {
  education.getAllEducationByResumeId(req.params.resumeId, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};



