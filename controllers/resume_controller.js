'use strict';

var resume = require('../models/resume');

exports.read_resume = (req, res) => {
  resume.getResumeByUserId(req.params.userId, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};

