'use strict';

angular.module('currencyExchange').directive('baseCurrency', function(dataService) {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: './src/views/baseCurrency.html',
        link($scope, $element, $attr) {
            $scope.dataService = dataService;
        }
    }
});