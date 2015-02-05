var React = require( 'react' ),
	App = require( '../client/app' );

module.exports = function renderApp( path, title ) {
	return '<!DOCTYPE html>\n' + React.renderToString(
		<App path={ path } title={ title } />
	)
};
