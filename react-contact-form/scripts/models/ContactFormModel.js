var Backbone = require("backbone");
Backbone.$ = require("jquery");
var validator = require("validator");
var _ = require("backbone/node_modules/underscore");

module.exports = Backbone.Model.extend({
	defaults: {
		name: null,
		email: null,
		site: null, 
		message: null
	},
	validate: function(attr){
		var errors= {};
		if(!attr.name){
			errors.name = "Field must not be blank!";
		}
		if(!attr.email){
			errors.email = "Field must not be blank!";
		} else if(!validator.isEmail(attr.email)){
			errors.email = "Must be a valid email!";
		}
		if(!attr.message){
			errors.message = "Field must not be blank!"
		}

		if(_.isEmpty(errors)){
			return false;
		} else {
			return errors;
		}
	},
	urlRoot:"http://localhost:3000/send-email"
});