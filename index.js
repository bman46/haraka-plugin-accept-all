'use strict'

exports.register = function () {
  this.loginfo("Loaded OK response plugin");
};

exports.hook_data = function (next, connection) {
  connection.transaction.parse_body = true;
  next();
};

exports.hook_queue = function (next, connection) {
  this.loginfo("Received an email, responding with OK.");
  return next(OK, "OK");
};

exports.hook_rcpt = function (next, connection, params) {
  // params[0] is the recipient email address
  var recipient = params[0];

  this.loginfo("Received RCPT TO: " + recipient);

  // Always accept the recipient, no matter what
  return next();
};