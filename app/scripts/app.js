'use strict';

/**
 * @ngdoc overview
 * @name flashcardAppApp
 * @description
 * # flashcardAppApp
 *
 * Main module of the application.
 */
angular
    .module('flashcardAppApp', [
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngStorage'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/add', {
                templateUrl: 'views/add.html',
                controller: 'addCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .factory('Data', function($http) {
        var allData = {
            obj: null
        }
        $http.get('scripts/content.json').success(function(data) {
            allData.obj = data;
        });
        return allData;
    });


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
