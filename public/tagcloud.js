// THe provider function, which must return our new visualization type
function TagcloudProvider(Private) {
	var TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));

	// Describe our visualization
	return new TemplateVisType({
		name: 'trTagcloud', // The internal id of the visualization (must be unique)
		title: 'Tagcloud', // The title of the visualization, shown to the user
		description: 'Tagcloud visualization', // The description of this vis
		icon: 'fa-cloud', // The font awesome icon of this visualization
		template: require('plugins/tr-k4p-tagcloud/tagcloud.html') // The template, that will be rendered for this visualization
	});
}

require('ui/registry/vis_types').register(TagcloudProvider);
