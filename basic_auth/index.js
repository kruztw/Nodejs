//curl -u User:Password http://localhost:8888/auth -v

var express = require('express');
var app = express();
var basicAuth = require('basic-auth');


var auth = function(req, res, next) {
	function pop_form(res) {
		res.set('WWW-Authenticate', 'Basic realm=Input User&Password');
		return res.sendStatus(401);
	}

	var user = basicAuth(req);
	if (!user || !user.name || !user.pass)
		return pop_form(res);

	if (user.name === 'User' && user.pass === 'Password')
		return next();
    else {
        res.sendStatus(401)     
        return res.send("Unauthorized");
    }
};

app.get('/', auth, function(req, res) {
	res.status(200).send('Authorization');
});

app.listen(8888);

