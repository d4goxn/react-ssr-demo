var React = require( 'react' ),
	router = require( 'react-router-component' ),
	Link = router.Link;

var Nav = module.exports = React.createClass({
	render: function() {
		return (
			<ul className='nav clearfix'>
				<li><Link href='/' >home</Link></li>
				<li><Link href='/about' >about</Link></li>
			</ul>
		);
	}
});
