'use strict';

var React = require( 'react' ),
	util = require( 'util' ),
	Nav = require( './nav' ),
	HomePage = require( './home-page' ),
	AboutPage = require( './about-page' ),
	router = require( 'react-router-component' ),
	Pages = router.Pages,
	Page = router.Page;

var App = module.exports = React.createClass({
	displayName: 'App',

	render: function() {
		return (
			<html>
				<head>
					<title>{ this.props.title }</title>
					<meta name='description' value={ this.props.metaDescription } />
					<link rel='stylesheet' type='text/css' href='/style.css' />
				</head>
				<Pages path={ this.props.path }>
					<Page path='/' handler={ HomePage } />
					<Page path='/about' handler={ AboutPage } />
				</Pages>
				<script src='/index.js' />
			</html>
		);
	}
});
