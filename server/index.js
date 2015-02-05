'use strict';

require( 'node-jsx' ).install();

var express = require( 'express' ),
	path = require( 'path' ),
	url = require( 'url' ),
	logger = require( 'morgan' ),
	compress = require( 'compression' )(),
	util = require( 'util' ),
	renderApp = require( './render-app' );

var server = express();

server.use( logger( 'dev' ));
server.use( compress );
server.use( express.static( path.join( __dirname, '../static' )));

server.get( '/', function( req, res ) {
	var urlPath = url.parse( req.url ).pathname;
	util.inspect( urlPath );

	res.send( renderApp( urlPath, 'Home' ));
});

server.get( '/about', function( req, res ) {
	var urlPath = url.parse( req.url ).pathname;

	res.send( renderApp( urlPath, 'About' ));
});

var host = server.listen( 3000, function() {
	console.log( 'Listening on %s:%s', host.address().address, host.address().port );
});
