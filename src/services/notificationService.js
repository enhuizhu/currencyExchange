'use strict';

angular.module('currencyExchange').service('notificationService', function($rootScope) {
    
    this.pub = function(name, data) {
        $rootScope.$broadcast(name, data);
    }

    this.sub = function(name, callback) {
        $rootScope.$on(name, function(event, data) {
            callback(data);
        });
    }
});