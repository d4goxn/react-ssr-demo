'use strict';

require( 'node-jsx' ).install();

var express = require( 'express' ),
	path = require( 'path' ),
	logger = require( 'morgan' ),
	React = require( 'react' ),
	App = require( '../client/app' );

var server = express();

server.use( logger( 'dev' ));
server.use( express.static( path.join( __dirname, '../static' )));

server.get( '/', function( req, res ) {
	res.send( React.renderToString( React.createElement( App, null )));
});

var host = server.listen( 3000, function() {
	console.log( 'Listening on %s:%s', host.address().address, host.address().port );
});
