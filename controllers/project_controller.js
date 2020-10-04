'use strict';

var project = require('../models/project');

exports.read_projects = (req, res) => {
  project.getAllProjectsByUserId(req.params.userId, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};



