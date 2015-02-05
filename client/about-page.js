var React = require( 'react' ),
	Layout = require( './layout' ),
	TitleMixin = require( './title-mixin' );

var AboutPage = module.exports = React.createClass({
	mixins: [ TitleMixin( 'About' )],

	render: function() {
		return (
			<Layout>
				<h2>About</h2>
			</Layout>
		);
	}
});
