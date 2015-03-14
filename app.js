// Nice big AngularJS function,
// contains the module and controller(s)
(function() {

	// The primary AnguarJS module, using bootstrap
	var crabApp = angular.module('crabApp', ['ui.bootstrap']);

	// Kind of a 'God' controller at the moment, but changes the 
	// contents of the graph depending on button selected.
	crabApp.controller('TierSelect', ['$scope', function($scope) {
		// Default to Tier 1, completely arbitrary.
		$scope.radioModel = 'T1';

		// Function called depending on the button pushed
		$scope.setTier = function(tier) {
			$scope.get

			// if-else ladder determining the selected button
			if (tier === 0) {
				// Each tier (so far) only sets the chartText map referenced in 
				// viz.js by the chart drawing function.
				chartText = {
					tier: 0,
					hAxis: "Crab trio number",
					title: "tier 1",
					vAxis: "Total tier 1 behaviors",
				};

			} else if (tier === 1) {
				chartText = {
					tier: 1,
					hAxis: "Crab trio number",
					title: "tier 2",
					vAxis: "Total tier 2 behaviors",
				};
			} else if (tier === 2) {
				chartText = {
					tier: 2,
					hAxis: "Crab trio number",
					title: "retreat",
					vAxis: "Total retreat behaviors",
				};
			}

			// Redraw the graph!
			drawVisualization();
		};

	}]);

})();