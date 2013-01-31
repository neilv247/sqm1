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
    $scope.groupix = $location.search()['groupix'];
    $scope.faultix = $location.search()['faultix'];
    $scope.currDetail = data.HEADER[$scope.groupix].GROUP[$scope.faultix];
  });
  $scope.checks = [
    {check:'P', bg:'green'},
    {check:'F', bg:'red'},
    {check:'N', bg:'white'}
  ];
  $scope.setFault = function(){
        alert( 'value1: ' + $scope.currDetail.DETAIL[0].VALUE + ', grpix: ' + $scope.groupix + ', faultix: ' + $scope.faultix);
	alert( 'value2: ' + $scope.currDetail.DETAIL[1].VALUE);
	alert( 'value3: ' + $scope.currDetail.DETAIL[2].VALUE);
	$scope.inspection.HEADER[$scope.groupix].GROUP[$scope.faultix].DETAIL = $scope.currDetail.DETAIL;
    };
  $scope.getFaultColor = function(fcheck){
        //alert( 'fcheck: ' + fcheck);
	var fcolor = "white";
	if (fcheck == "P") 
	{ fcolor = "success"; }
	else
	if (fcheck == "F")
	{ fcolor = "error"; }
	//alert( 'fcolor: ' + fcolor);
	return fcolor;
    };
}

//MyFaults.$inject = ['$scope', '$routeParams', '$http', '$location'];
