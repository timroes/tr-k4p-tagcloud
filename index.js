module.exports = function(kibana) {
	return new kibana.Plugin({
		uiExports: {
			visTypes: ['plugins/tr-k4p-tagcloud/tagcloud']
		}
	});
};