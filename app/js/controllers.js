'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];

function MySchedules($scope, $routeParams, $http) {
  $http.get('inspections/neilston_p1.json').success(function(data) {
    $scope.inspection = data;
  });
}

//MySchedules.$inject = ['$scope', '$routeParams', '$http'];

function MyGroups($scope, $routeParams, $http, $location) {

  $http.get('inspections/neilston_p1.json').success(function(data) {
    $scope.inspection = data;
  });
  $scope.groupix = $location.search()['groupix'];
}

//MyGroups.$inject = ['$scope', '$routeParams', '$http', '$location'];

function MyFaults($scope, $routeParams, $http, $location) {

  $http.get('inspections/neilston_p1.json').success(function(data) {
    $scope.inspection = data;
  });
  $scope.groupix = $location.search()['groupix'];
  $scope.faultix = $location.search()['faultix'];
  $scope.checks = [
    {value:'P', bg:'green'},
    {value:'F', bg:'red'},
    {value:'N', bg:'white'}
  ];
  $scope.setFault = function(value,groupix,faultix,detailix){
        alert( 'value: ' + value + ', grpix: ' + groupix + ', faultix: ' + faultix + ', detix: ' + detailix);
	
    }
}

//MyFaults.$inject = ['$scope', '$routeParams', '$http', '$location'];
