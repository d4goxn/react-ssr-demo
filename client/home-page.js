var React = require( 'react' ),
	Layout = require( './layout' );

var HomePage = module.exports = React.createClass({
	componentDidMount: function() {
		document.title = 'Home';
	},

	render: function() {
		return (
			<Layout>
				<p className='ok'>ok</p>
			</Layout>
		);
	}
});
