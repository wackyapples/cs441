// Nice big AngularJS function,
// contains the module and controller(s)
(function() {

	// Load the Google Charts API
	google.load('visualization', '1', {
		packages: ['corechart']
	});

	// The primary AnguarJS module, using bootstrap
	var crabApp = angular.module('crabApp', ['ui.bootstrap']);

	// Inital data for the chart (Tier 1)
	var data = google.visualization.arrayToDataTable(aggroData[0]);

	// Inital graph options for the Google Chart
	var options = {
		title: "Number of tier 1 behaviors amongst all crabs",
		height: 400,
		vAxis: {
			title: "Total tier 1 behaviors",
			viewWindowMode: 'explict',
			viewWindow: {
				max: 200,
			},
		},
		hAxis: {
			title: 'Crab trio number',
		},
		legend: {
			position: 'right',
		},
		bar: {
			groupWidth: '75%'
		},
		// Make the chart stacked
		isStacked: true,
		animation: {
			startup: true,
			duration: 1000,
			easing: 'inAndOut'
		},
	};

	// Changes the contents of the graph depending on button selected.
	crabApp.controller('TierSelect', ['$scope', function($scope) {

		$scope.chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));


		// Default to Tier 1, completely arbitrary.
		$scope.radioModel = 'T1';

		// Function called depending on the button pushed
		$scope.setTier = function(tier) {
			$scope.get

			// if-else ladder determining the selected button
			if (tier === 0) {
				options.vAxis.title = "Total tier 1 behaviors";
				options.title = "Number of tier 1 behaviors amongst all crabs";

			} else if (tier === 1) {
				options.vAxis.title = "Total tier 2 behaviors";
				options.title = "Number of tier 2 behaviors amongst all crabs";
			} else if (tier === 2) {
				options.vAxis.title = "Total retreat behaviors";
				options.title = "Number of retreat behaviors amongst all crabs";
			}

			// Sets the data to the selected tier
			data = google.visualization.arrayToDataTable(aggroData[tier]);

			// Redraw the graph!
			$scope.chart.draw(data, options);
		};

		// Initalization function, draws the chart on page load.
		$scope.init = function() {
			$scope.setTier(0);
		}();
		// $scope.init();

	}]);

})();