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
    // ******************************
    // Internal methods
    // ******************************
    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
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
    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';
      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };
    }
  }
