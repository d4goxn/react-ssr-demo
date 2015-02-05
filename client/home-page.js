var React = require( 'react' ),
	Layout = require( './layout' );

var HomePage = module.exports = React.createClass({
	render: function() {
		return (
			<Layout title='Home'>
				<p className='ok'>ok</p>
			</Layout>
		);
	}
});
