var React = require( 'react' ),
	Layout = require( './layout' );

var AboutPage = module.exports = React.createClass({
	componentDidMount: function() {
		document.title = 'About';
	},

	render: function() {
		return (
			<Layout>
				<h2>About</h2>
			</Layout>
		);
	}
});
