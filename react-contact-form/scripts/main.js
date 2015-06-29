var React = require("react");
var ContactForm = require("./components/ContactFormComponent");
var SuccessMessage = require("./components/SuccessMessageComponent");
var Backbone = require("backbone");

var App = Backbone.Router.extend({
	routes: {
		"": "contact",
		"sent":"sentMessage"
	},
	contact: function(){
		React.render(<ContactForm  routing={this}/>, document.getElementById("container"));
	},
	sentMessage: function(){
		React.render(<SuccessMessage />,document.getElementById("container"));
	}
});

var myRouter = new App();
Backbone.history.start();

