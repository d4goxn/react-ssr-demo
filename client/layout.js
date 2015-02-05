var React = require( 'react' ),
	Nav = require( './nav' ),
	TitleMixin = require( './title-mixin' );

var Layout = module.exports = React.createClass({
	mixins: [ TitleMixin ],

	render: function() {
		return (
			<div>
				<Nav />
				{ this.props.children }
			</div>
		);
	}
});
