'use strict'

exports.register = function () {
  this.register_hook('rcpt',    'hook_rcpt');
  this.register_hook('queue',    'hook_queue');
  this.register_hook('data',    'hook_data');
};

exports.hook_data = function (next, connection) {
  connection.transaction.parse_body = true;
  return next(OK);
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
  return next(OK);
};