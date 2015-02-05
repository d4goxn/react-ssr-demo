var TitleMixin = module.exports = function( title ) {
	return {
		componentDidMount: function() {
			document.title = title;
		}
	};
};
