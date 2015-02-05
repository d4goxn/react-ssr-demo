var React = require( 'react' ),
	Layout = require( './layout' ),
	TitleMixin = require( './title-mixin' );

var HomePage = module.exports = React.createClass({
	mixins: [ TitleMixin( 'Home' )],

	render: function() {
		return (
			<Layout>
				<p className='ok'>ok</p>
			</Layout>
		);
	}
});
