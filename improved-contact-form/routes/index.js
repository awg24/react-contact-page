var express = require('express');
var router = express.Router();
var nodeMailer = require("nodemailer");
var emailConfig = require("config/email");

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
		html: "<h1>"+req.body.message+"</h2>"
	};
	transporter.sendMail(message, function(error, info){
		if(error){
			console.log("this is the error ",error);
		} else {
			console.log(info);
		}
	});
	res.json(req.body);
});

module.exports = router;
