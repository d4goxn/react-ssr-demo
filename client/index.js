'use strict';

var React = require( 'react' );
var App = require( './app' );

React.render(
	<App title={ document.title } />,
	document
);
