// Nice big AngularJS function,
// contains the module and controller(s)
(function() {

	// The primary AnguarJS module, using bootstrap
	var crabApp = angular.module('crabApp', ['ui.bootstrap']);

	// Kind of a 'God' controller at the moment, but changes the 
	// contents of the graph depending on button selected.
	crabApp.controller('TierSelect', ['$scope', function ($scope){
		// Default to Retreats, completely arbitrary.
		$scope.radioModel = 'R';
		
		// Function called depending on the button pushed
		$scope.setTier = function(tier) {
			$scope.get

			// if-else ladder determining the selected button
			if (tier === 1) {
				// Each tier (so far) only sets the chartText map referenced in 
				// viz.js by the chart drawing function.
				chartText = {
					queryStr: "SELECT Total_1 FROM 1sgTnIGOiutCr7mgVdMFjT17BiHfQAblXMHGyYnVw",
					hAxis: "Tier 1 Actions",
					title: "Tier 1 Actions",
					colLabel: "Tier 1 Actions",
				};
				
			}
			else if (tier === 2) {
				chartText = {
					queryStr: "SELECT Total_2 FROM 1sgTnIGOiutCr7mgVdMFjT17BiHfQAblXMHGyYnVw",
					hAxis: "Tier 2 Actions",
					title: "Tier 2 Actions",
					colLabel: "Tier 2 Actions",
				};
			}
			else if (tier === 3) {
				chartText = {
				    queryStr: "SELECT Total_R FROM 1sgTnIGOiutCr7mgVdMFjT17BiHfQAblXMHGyYnVw",
				    hAxis: "Retreats",
				    title: "Retreat Behavior",
				    colLabel: "Retreats",
				};
			}

			// Redraw the graph!
			drawVisualization();
		};

	}]);

})();