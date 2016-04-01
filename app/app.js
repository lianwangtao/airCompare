'use strict';
var app = angular.module('airCompare',['ngMaterial','ngMdIcons'])
.config(function($mdThemingProvider) {

  var customPrimary = {
        '50': '#42b7fd',
        '100': '#28adfd',
        '200': '#0fa4fc',
        '300': '#0397ef',
        '400': '#0287d6',
        '500': '#0277bd',
        '600': '#0267a4',
        '700': '#01578b',
        '800': '#014771',
        '900': '#013758',
        'A100': '#5bc0fd',
        'A200': '#74cafe',
        'A400': '#8dd4fe',
        'A700': '#01283f'
    };
    $mdThemingProvider
        .definePalette('customPrimary',customPrimary);

    $mdThemingProvider.theme('default')
       .primaryPalette('customPrimary')
});


// app.controller('projectsListCtrl', ['$scope','$http', function($scope, $http) {
//   $http.get('projects.json').success(function(data) {
//     $scope.projects = data;
//   });
// }]);


//Controller for Angualr Material Dialog
app.controller('AppCtrl', function($scope) {

});
