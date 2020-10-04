'use strict';

var User = require('../models/user');

exports.list_all_users = (req, res) => {
  User.getAllUsers((err, task) => {
    console.log('controller');
    if (err)
      res.send(err);
    console.log('res', task);
    res.send(task);
  });
};


exports.create_a_user = (req, res) => {
  let new_user = new User(req.body);

  //handles null error
  if (!new_user.id || !new_user.username || !new_user.email || !new_user.contact) {

    res.status(400).send({error: true, message: 'Error when creating user'});

  } else {

    User.createUser(new_user, (err, task) => {
      if (err)
        res.send(err);
      res.json(task);
    });
  }
};


exports.read_a_user = (req, res) => {
  User.getUserById(req.params.userId, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_user = (req, res) => {
  User.updateById(req.params.userId, new User(req.body), (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_user = (req, res) => {
  User.remove(req.params.userId, (err, task)  => {
    if (err)
      res.send(err);
    res.json({message: 'Task successfully deleted'});
  });
};