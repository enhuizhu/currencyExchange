'use strict';

angular.module('currencyExchange').directive('transferedCurrency', function(dataService, notificationService, events) {
	return {
		restrict: 'AE',
        replace: true,
		templateUrl: './src/views/transferedCurrency.html',
		link: function($scope, $element, $attr) {
			$scope.dataService = dataService;

            $scope.change = function() {
                notificationService.pub(events.UPDATE_TRANSFER_TOTAL);
            }

            notificationService.sub(events.UPDATE_BASE_TOTAL, function() {
                $scope.dataService.trasferTotal =  dataService.calculateTransferedTotal();
            });
		}
	}
});