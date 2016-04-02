'use strict';
var app = angular.module('airCompare',['ngMaterial','ngMdIcons']);                

//Controller for Angualr Material Dialog
app.controller('AppCtrl', function($scope) {
  $scope.submit = function() {
    alert("On Wisconsin!");
  };
});


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
