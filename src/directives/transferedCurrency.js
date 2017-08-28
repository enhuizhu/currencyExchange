'use strict';

angular.module('currencyExchange').directive('transferedCurrency', function(dataService) {
	return {
		restrict: 'AE',
		templateUrl: './src/views/transferedCurrency.html',
		link: function($scope, $element, $attr) {
			$scope.dataService = dataService;
		}
	}
});