var TitleMixin = module.exports = {
	componentDidMount: function() {
		document.title = this.props.title;
	}
};
