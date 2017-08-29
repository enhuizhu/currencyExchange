'use strict';

angular.module('currencyExchange').directive('transferedCurrency', function(dataService, notificationService, events) {
	return {
		restrict: 'AE',
        replace: true,
		templateUrl: './src/views/transferedCurrency.html',
		link: function($scope, $element, $attr) {
			$scope.dataService = dataService;

            $scope.change = function() {
                const absoluteTotal = Math.abs(dataService.trasferTotal);

                if (isNaN(absoluteTotal)) {
                    dataService.trasferTotal = '';
                } else {
	                dataService.trasferTotal =  '+' + absoluteTotal;
                }

                notificationService.pub(events.UPDATE_TRANSFER_TOTAL);
            };

            $scope.keydown = function(e) {
            	if (!/[0-9|Backspace]/.test(e.key)) {
            		e.preventDefault();
            	}
            };

            notificationService.sub(events.UPDATE_BASE_TOTAL, function() {
                $scope.dataService.trasferTotal =  dataService.calculateTransferedTotal();
            });
		}
	}
});