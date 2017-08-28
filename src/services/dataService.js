'use strict';

angular.module('currencyExchange').service('dataService', function() {
	return {
		currencies: {},
		base: 'USD',
		rates: {},
		baseTotal: 0,
		transfered: 'AED',
		trasferTotal: function() {
			return (this.baseTotal * this.rates[this.transfered]).toFixed(2);
		}
	}	
})