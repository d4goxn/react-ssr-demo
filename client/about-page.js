var React = require( 'react' ),
	Layout = require( './layout' );

var AboutPage = module.exports = React.createClass({
	render: function() {
		return (
			<Layout title='About'>
				<h2>About</h2>
			</Layout>
		);
	}
});
