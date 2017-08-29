'use strict';

angular.module('currencyExchange').directive('rateBox', function(dataService) {
	return {
		restrict: 'AE',
		replace: true,
		template: '<div class="rate-box-wrapper"><div class="rate-box">$1 = {{dataService.rates[dataService.transfered]}}</div></div>',
		link: function($scope, $element, $attr) {
			$scope.dataService = dataService;			
		}
	}
})