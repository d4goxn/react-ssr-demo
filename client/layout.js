var React = require( 'react' ),
	Nav = require( './nav' );

var Layout = module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<Nav />
				{ this.props.children }
			</div>
		);
	}
});
