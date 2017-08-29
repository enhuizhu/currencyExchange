'use strict';

class main {
    constructor($scope, apiService, dataService) {
        this.$ = $scope;
        this.apiService = apiService;
        this.dataService = dataService;
        this.init();    
    }

    init() {
        this.updateDataModel();
    }

    updateDataModel() {
        this.apiService.getAll().then(results => {
            this.dataService.currencies = results[0].data;
            this.dataService.base = results[1].data.base;
            this.dataService.rates = results[1].data.rates;
        });

        //excute the same function evey 10 seconds
        setTimeout(this.updateDataModel.bind(this), 10000);
    }
}

angular.module('currencyExchange').controller('main', main);