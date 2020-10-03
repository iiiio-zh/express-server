'user strict';
var sql = require('../db/db');

//Task object constructor
var User = (user) => {
  this.id = user.id;
  this.username = user.username;
  this.email = user.email;
  this.contact = user.contact;
};

User.createUser = (newUser, result) => {
  sql.query("INSERT INTO user set ?", newUser,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
};

User.getUserById = (userId, result) => {
  sql.query("Select user from user where id = ? ", userId,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);

      }
    });
};

User.getAllUsers = (result) => {
  sql.query("Select * from user",
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log('user : ', res);

        result(null, res);
      }
    });
};

User.updateById = (id, fields, result) => {
  let username = fields.username;
  let email = fields.email;
  let contact = fields.contact;

  sql.query("UPDATE user SET username = ?, email = ?, contact = ? WHERE id = ?", [username, email, contact, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

User.remove = (id, result) => {
  sql.query("DELETE FROM user WHERE id = ?", [id], function (err, res) {

    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {

      result(null, res);
    }
  });
};

module.exports = User;