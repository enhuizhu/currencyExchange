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
			return parseFloat((this.baseTotal * this.rates[this.transfered]).toFixed(2));
		},
		
		calculateBaseTotal: function() {
			return parseFloat((this.trasferTotal / this.rates[this.transfered]).toFixed(2));
		}
	}	
})