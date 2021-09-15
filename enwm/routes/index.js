var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Usermaster = require('../models/usermodel');

mongoose.connect('mongodb://localhost:27017/enwn');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', (req, res) => {
	var u = new Usermaster();

	u.username = req.params.username; // this comes from android form !
	u.password = req.params.password;

	u.save((err) => {
		if (err) {throw err;}

		res.redirect('/');
	});
});

router.post('/login', (req, res) => {
	var username = req.params.username;
	var password = req.params.password;

	Usermaster.findOne({
		'username' : username
	}, (err, user) => {
		if (err) {throw err;}

		if (user.length == 0) {
			// no user found
			res.redirect('');
		} else {
			if (user.password == password) {
				// successful
				res.redirect('');
			} else {
				// password incorrect
				res.redirect('');
			}
		}
	});
});

module.exports = router;
