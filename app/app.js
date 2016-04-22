'use strict';


var app = angular.module('airCompare',['ngMaterial','ngMdIcons']);


//Controller for Angualr Material Dialog
app.controller('AppCtrl', function($scope) {

  $scope.submit = function() {
    alert("On Wisconsin!");
  };
});

//Controller for API Call
app.controller('resultListCtrl', ['$scope','$http', function($scope, $http) {

  $http({
    method: 'GET',
    url:"http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=53715&date=2016-04-22&distance=25&API_KEY=8857D6C9-5DDA-45C7-9A21-942A36D128B5"
  }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.results = response.data;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log("errorCallback!"+response);
  });


//    $scope.results = [
//   {"DateIssue":"2016-03-30 ","DateForecast":"2016-04-03 ","ReportingArea":"Madison","StateCode":"WI","Latitude":43.12,"Longitude":-89.36,"ParameterName":"PM2.5","AQI":-3,"Category":{"Number":1,"Name":"Good"},"ActionDay":false,"Discussion":""},
//   {"DateIssue":"2016-03-30 ","DateForecast":"2016-04-04 ","ReportingArea":"Madison","StateCode":"WI","Latitude":43.12,"Longitude":-89.36,"ParameterName":"PM2.5","AQI":-1,"Category":{"Number":1,"Name":"Good"},"ActionDay":false,"Discussion":""}
// ];

}]);


//Controller for autocompelete
app.controller('DemoCtrl', DemoCtrl);

function DemoCtrl ($timeout, $q, $log) {
  var self = this;
  self.simulateQuery = false;
  self.isDisabled    = false;
  // list of `state` value/display objects
  self.states        = loadAll();
  self.querySearch   = querySearch;
  self.selectedItemChange = selectedItemChange;
  self.searchTextChange   = searchTextChange;
  self.newState = newState;
  function newState(state) {
    alert("Sorry! You'll need to create a Constituion for " + state + " first!");
  }

  function querySearch (query) {
    var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
        deferred;
    if (self.simulateQuery) {
      deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }
  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
  }
  function selectedItemChange(item) {
    $log.info('Item changed to ' + JSON.stringify(item));
  }

  function loadAll() {
    return allStates.split(/, +/g).map( function (state) {
      return {
        value: state.toLowerCase(),
        display: state
      };
    });
  }


  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };
  }
}
