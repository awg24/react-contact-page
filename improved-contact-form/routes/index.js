var express = require('express');
var router = express.Router();
var nodeMailer = require("nodemailer");
var emailConfig = require("config/email");
var textConfig = require("config/text");

var client = require('twilio')(textConfig.accountSid, textConfig.authToken);

router.get("/", function(req, res){
	res.render("index", {title: "Allen"});
});

router.post("/send-email", function(req, res){

	var transporter = nodeMailer.createTransport(emailConfig);
	var message = {
		from: req.body.email,
		to: "allen.wes.g@gmail.com",
		subject: "Contact Information",
		text: req.body.site,
		html: "<h3>"+req.body.message+"</h3>"
	};
	transporter.sendMail(message, function(error, info){
		if(error){
			console.log("this is the error ",error);
		} else {
			client.messages.create({
				    body: req.body.message,
				    to: "+19566394391",
				    from: textConfig.fromNumber   
				}, 
			    function(err, message) {
			    	if(err){
			    		console.log(err);
			    	} else {
			    		console.log(message);
			    	}
			    	
				}
			);
		}
		res.json(message);
	});
});



module.exports = router;
