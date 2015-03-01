'use strict';

/**
 * @ngdoc function
 * @name flashcardAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flashcardAppApp
 */
angular.module('flashcardAppApp')
    .controller('AboutCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    })
    .controller('cardCtrl', function($scope, Data) {

        $scope.data = Data;

		$scope.newRandomCard = function () {
			var i = getRandomInt(0, 9);

			return (Data.obj[i].address);
		}
    });




