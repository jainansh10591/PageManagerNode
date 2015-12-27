var express = require('express');
var router = express.Router();
var Facebook = require('facebook-node-sdk');

router.get('/login', Facebook.loginRequired(), function(req, res) {
  req.facebook.api('/me', function(err, user) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, ' + JSON.stringify(user) + '!');
  });
});

router.get('/logout', function(req, res) {
  req.facebook.api('/me', function(err, user) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, ' + JSON.stringify(user) + '!');
  });
});


module.exports = router;
