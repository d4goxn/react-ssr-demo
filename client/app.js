'use strict';

var React = require( 'react' ),
	FrozenHead = require( 'react-frozenhead' ),
	util = require( 'util' ),
	HomePage = require( './home-page' ),
	AboutPage = require( './about-page' ),
	router = require( 'react-router-component' ),
	Pages = router.Pages,
	Location = router.Location;

var App = module.exports = React.createClass({
	displayName: 'App',

	render: function() {
		console.log( this.props );
		var props = this.props.path; // How did all of this.props end up inside this.props.path?

		return (
			<html>
				<head>
					<title>{ props.title }</title>
					<link rel='stylesheet' type='text/css' href='/style.css' />
				</head>
				<Pages path={ props.path }>
					<Location path='/' handler={ HomePage } />
					<Location path='/about' handler={ AboutPage } />
				</Pages>
				<script src='/index.js' />
			</html>
		);
	}
});
