var express = require('express');
var router = express.Router();
var Facebook = require('facebook-node-sdk'); 


// to get all post of a page
router.get('/:id', Facebook.loginRequired({scope: ['manage_pages','publish_pages', 'ads_management']}), function(req, res) {
  req.facebook.api('/'+req.params.id+'/feed', 'GET', function(err, user) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, ' + JSON.stringify(user) + '!');
  });
});

router.get('/:id/fb', Facebook.loginRequired({scope: ['manage_pages','publish_pages','publish_actions']}), function(req, res) {
  data = {};
  data.message = "hello";
  console.log(data);
  req.facebook.api('/'+req.params.id+'/feed', 'POST', data , function(err, user) {
  	if(err){
  		res.writeHead(200, {'Content-Type': 'text/plain'});
    	res.end('Hello, ' + JSON.stringify(err) +'!');
  	}
    else{
    	res.writeHead(200, {'Content-Type': 'text/plain'});
    	res.end('Hello, ' + '!');
	}
  });
});


router.get('/:id/edit', Facebook.loginRequired({scope: ['manage_pages','publish_pages']}), function(req, res) {
  req.facebook.api('/me', function(err, user) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, ' + JSON.stringify(user) + '!');
  });
});

router.get('/:id/delete', Facebook.loginRequired({scope: ['manage_pages','publish_pages']}), function(req, res) {
  req.facebook.api('/me', function(err, user) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, ' + JSON.stringify(user) + '!');
  });
});

router.get('/:id/post', Facebook.loginRequired({scope: ['manage_pages','publish_pages']}), function(req, res) {
  req.facebook.api('/me', function(err, user) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, ' + JSON.stringify(user) + '!');
  });
});

router.get('/:id/unpublished_post', Facebook.loginRequired({scope: ['manage_pages','publish_pages']}), function(req, res) {
  req.facebook.api('/me', function(err, user) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, ' + JSON.stringify(user) + '!');
  });
});

module.exports = router;
