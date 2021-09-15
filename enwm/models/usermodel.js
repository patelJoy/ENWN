var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsermasterSchema = new Schema({
	username: String,
	password: String
});