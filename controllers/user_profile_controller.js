'use strict';

var userProfile = require('../models/user_profile');

exports.read_a_user_profile = (req, res) => {
  userProfile.getUserProfileByUserId(req.params.userId, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};



