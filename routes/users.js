// var express = require('express');
// var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

'use strict';
module.exports = (app) => {
  let users = require('../controllers/user_controller');

  // todoList Routes
  app.route('/users')
    .get(users.list_all_users)
    .post(users.create_a_user);

  app.route('/users/:userId')
    .get(users.read_a_user)
    .put(users.update_a_user)
    .delete(users.delete_a_user);
};

// module.exports = router;
