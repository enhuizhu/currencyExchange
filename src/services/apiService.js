'use strict';

angular.module('currencyExchange').service('apiService', function($http, $q) {
	
	this.getAll = function() {
		let promises = [];
		promises.push(this.getAllCurrencies());
		promises.push(this.getLatestRate());

		return $q.all(promises);
	}
	
	this.getAllCurrencies = function() {
		return $http.get('https://openexchangerates.org/api/currencies.json');
	}

	this.getLatestRate = function() {
		return $http.get('https://openexchangerates.org/api/latest.json?app_id=2a10487039d5447ab4596be3663317a5');
	}

})