'use strict';

angular.module('currencyExchange').service('dataService', function() {
    return {
        currencies: {},
        base: 'USD',
        rates: {},
        baseTotal: '',
        transfered: 'AED',
        trasferTotal: '',
        
        calculateTransferedTotal: function() {
            const absoluteTotal = parseFloat((Math.abs(this.baseTotal) * this.rates[this.transfered]).toFixed(2))
            
            if (isNaN(absoluteTotal)) {
                return '';
            }

            return '+' + absoluteTotal;
        },
        
        calculateBaseTotal: function() {
            return -parseFloat((Math.abs(this.trasferTotal) / this.rates[this.transfered]).toFixed(2));
        }
    }   
})