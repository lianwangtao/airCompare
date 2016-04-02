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
  var result =
  "DateIssue","DateForecast","ReportingArea","StateCode","Latitude","Longitude","ParameterName","AQI","CategoryNumber","CategoryName","ActionDay","Discussion"
"2016-03-30 ","2016-04-01 ","Madison","WI","43.12","-89.36","PM2.5","-1","1","Good","false",""
"2016-03-30 ","2016-04-02 ","Madison","WI","43.12","-89.36","PM2.5","-1","1","Good","false",""
"2016-03-30 ","2016-04-03 ","Madison","WI","43.12","-89.36","PM2.5","-1","1","Good","false",""
"2016-03-30 ","2016-04-04 ","Madison","WI","43.12","-89.36","PM2.5","-1","1","Good","false",""};
  // var url = 'http://www.airnowapi.org/aq/forecast/zipCode/?format=text/csv&zipCode=53715&date=2016-04-01&distance=25&API_KEY=8857D6C9-5DDA-45C7-9A21-942A36D128B5';
  // $http.get(url).success(function(data) {
  //   $scope.result = data;
  // });
  console.log(result);
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
