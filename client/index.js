'use strict';

var React = require( 'react' ),
	App = require( './app' );

// We cannot change a meta tag when running in the browser, but we do have to define one. This means that we have to set it to it's current value, which was rendered server side.
var metaDescription = document.querySelector( 'meta[name=description]' ).getAttribute('value');
console.log( metaDescription );

React.render(
	<App title={ document.title } metaDescription={ metaDescription } />,
	document
);
