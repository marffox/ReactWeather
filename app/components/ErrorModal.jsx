var React = require('react');

var ErrorModal = React.createClass({
	displayName: 'ErrorModal',
	getDefaultProps: function () {
		return {
			title:'Error'
		};
	},
	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},
	componentDidMount: function () {
		var modal = new Foundation.Reveal($('#error-modal'));//podemos pasar el id o refs
		modal.open();
	},
	render: function () {
		var {title, message} = this.props;
		return (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close="">Okay</button>
				</p>
			</div>
		);
	}
});

module.exports = ErrorModal;
