'use strict';

var work = require('../models/work');

exports.read_works = (req, res) => {
  work.getAllWorkByResumeId(req.params.resumeId, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};



