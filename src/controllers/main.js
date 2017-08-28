'use strict';

class main {
    constructor($scope, apiService, dataService) {
        this.$ = $scope;
        this.apiService = apiService;
        this.dataService = dataService;
        this.init();    
    }

    init() {
        this.apiService.getAll().then(results => {
            console.log('results', results);
            this.dataService.currencies = results[0].data;
            this.dataService.base = results[1].data.base;
            this.dataService.rates = results[1].data.rates;
        });
    }
}

angular.module('currencyExchange').controller('main', main);