'use strict';

var React = require( 'react' ),
	FrozenHead = require( 'react-frozenhead' );

var App = module.exports = React.createClass({
	displayName: 'App',

	render: function() {
		return (
			<html>
				<FrozenHead>
					<title>title</title>
					<meta name='meta' value='value' />
					<link rel='stylesheet' type='text/css' href='/style.css' />
				</FrozenHead>
				<body>
					<p>ok</p>
				</body>
			</html>
		);
	}
});
