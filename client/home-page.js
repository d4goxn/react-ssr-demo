var React = require( 'react' ),
	Nav = require( './nav' );

var HomePage = module.exports = React.createClass({
	componentDidMount: function() {
		document.title = 'Home';
	},

	render: function() {
		return (
			<body>
				<Nav />
				<p class='ok'>ok</p>
			</body>
		);
	}
});
