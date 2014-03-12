/* Business Card Maker app
 */

var app = angular.module('businessCardMaker', [
	'ngRoute',
	'ngTouch',
	'angular-meditor'
]).config(function($routeProvider) {
	'use strict';

	$routeProvider
	.when('/', {
		templateUrl: 'views/cardeditor.html',
		controller: 'MainCtrl',
		reloadOnSearch: false
	}).otherwise({
		redirectTo: '/?theme=0'
	});

	// start tracking
	analytics.page();
});

app.run(function($rootScope){

	var root = $rootScope.root = {};

	root.smallScreen = (screen.width <= 1024);

});
