'use strict';

module.exports.handler = function(event, context, cb) {
  return cb(null, {
    message: 'Welcome to Serverless! Your Lambda function executed successfully!'
  });
};
