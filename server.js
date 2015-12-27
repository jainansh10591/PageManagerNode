var express = require('express'),
    path = require('path'),
    http = require('http'),
    wine = require('./routes/wines'),
    Facebook = require('facebook-node-sdk'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    api = require('./routes/api');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secretSanta',
    saveUninitialized: true,
    resave: true
}));
app.use(Facebook.middleware({ appId: '485782364935495', secret: '2021d1bb0d505d417e88fd4f82a7f58d', scope: 'manage_pages, publish_pages, ads_management' }));

app.use('/', api);



// app.get('/login', Facebook.loginRequired(), function (req, res) {
//   req.facebook.api('/me/accounts', function(err, user) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello, ' + JSON.stringify(user) + '!');
//   });
// });

// app.get('/perm', Facebook.loginRequired({scope: ['email','manage_pages','publish_pages']}), function (req, res) {
//   req.facebook.api('/me/permissions', function(err, user) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello, ' + JSON.stringify(user) + '!');
//   });
// });

// app.get('/wines', wine.findAll);
// app.get('/wines/:id', wine.findById);
// app.post('/wines', wine.addWine);
// app.put('/wines/:id', wine.updateWine);
// app.delete('/wines/:id', wine.deleteWine);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

module.exports = app;