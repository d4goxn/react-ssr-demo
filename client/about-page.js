var React = require( 'react' ),
	Nav = require( './nav' );

var HomePage = module.exports = React.createClass({
	componentDidMount: function() {
		document.title = 'About';
	},

	render: function() {
		return (
			<body>
				<Nav />
				<h2>About</h2>
			</body>
		);
	}
});
