// Create an Angular module for this plugin
var module = require('ui/modules').get('tr-k4p-tagcloud');

module.controller('TagcloudController', function($scope) {

	$scope.$watch('esResponse', function(resp) {
		if (!resp) {
			$scope.tags = null;
			return;
		}

		// Retrieve the id of the configured tags aggregation
		var tagsAggId = $scope.vis.aggs.bySchemaName['tags'][0].id;
		// Get the buckets of that aggregation
		var buckets = resp.aggregations[tagsAggId].buckets;
		// Transform all buckets into tag objects
		$scope.tags = buckets.map(function(bucket) {
			return {
				label: bucket.key
			};
		});
	});
});
