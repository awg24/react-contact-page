var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<div className="panel center-block text-center panel-primary give-width">
					<div className="panel-heading">
						<h3 className="panel-title">Sent!</h3>
					</div>
					<div className="panel-body">
						<h3>Please wait about 5 minutes before trying to submit again!</h3>
					</div>
				</div>
			</div>
		);
	}
});