var React = require("react");
var Backbone = require("backbone");
Backbone.$ = require("jquery");
var ContactFormModel = require("../models/ContactFormModel");

module.exports = React.createClass({
	getInitialState: function(){
		return {
			errors:{},
			success:{}
		}
	},
	render: function(){
		return (
			<div className="panel give-width center-block panel-primary">
				<div className="panel-heading">
					<div className="panel-title">Contact Us</div>
				</div>
				<div className="give-padding ">
					<form className="form-horizontal panel-body" onSubmit={this.submitForm}>
						<div className="form-group">
							<label className="control-label">Name</label><br/>
							<input className="col-sm-12" ref="name" type="text" defaultValue="Allen Wes"/><br/>
							<span>{this.state.errors.name}</span>
						</div>
						<div className="form-group">
							<label className="control-label">Email</label><br/>
							<input className="col-sm-12"  ref="email" type="" defaultValue="allen.wes@email.com"/>
							<br/>
							<span>{this.state.errors.email}</span>
						</div>
						<div className="form-group">
							<label className="control-label">Website (optional)</label><br/>
							<input className="col-sm-12"  ref="site" type="" defaultValue="blah.com"/><br/>
						</div>
						<div className="form-group">
							<label className="control-label">Message</label><br/>
							<textarea className="form-control" ref="message" defaultValue="Hiya from javascript!">
							</textarea><br/>
							<span>{this.state.errors.message}</span>
							<span className="make-green">{this.state.success.message}</span>
						</div>
						<button className="btn btn-primary" type="submit">Submit</button><br/>
					</form>
				</div>
			</div>
		);
	},
	submitForm: function(event){
		event.preventDefault();
		var name = this.refs.name.getDOMNode().value;
		var email = this.refs.email.getDOMNode().value;
		var site = this.refs.site.getDOMNode().value;
		var message = this.refs.message.getDOMNode().value;

		var contactForm = new ContactFormModel({
			name: name,
			email: email,
			site: site,
			message: message
		});
		console.log(contactForm);
		if(!contactForm.isValid()){
			console.log(contactForm.validationError);
			this.setState({errors: contactForm.validationError});
		} else {
			var that = this;
			this.setState({errors:{}});
			contactForm.save(null,{
				error:function(data){
					console.log("didnt work, yo");
				},
				success: function(){
					console.log("sent");
					var successMessage = {message: "Message Sent!"};
					that.setState({success:successMessage});
					that.props.routing.navigate("sent",{trigger: true})
				}
			});
		}

	}
});
