'use strict';

angular.module('currencyExchange').directive('baseCurrency', function(dataService, notificationService, events) {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: './src/views/baseCurrency.html',
        link($scope, $element, $attr) {
            $scope.dataService = dataService;

            $scope.changeBase = function() {
                dataService.baseTotal = - Math.abs(dataService.baseTotal)
                notificationService.pub(events.UPDATE_BASE_TOTAL);
            }

            notificationService.sub(events.UPDATE_TRANSFER_TOTAL, function() {
                $scope.dataService.baseTotal = dataService.calculateBaseTotal();
            });
        }
    }
});