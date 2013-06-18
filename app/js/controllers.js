'use strict';

/* Controllers */

function MyCtrl1() {}
MyCtrl1.$inject = [];

function MyCtrl2() {
}
MyCtrl2.$inject = [];

function MySchedules($scope, $routeParams, $http, partialResults) {
  $http.get('inspections/neilston_p1.json').success(function(data) {
    $scope.inspection = data;
//    alert( 'INSP: ' + $scope.inspection.INSPECTION);
    partialResults.setObject(data);
  });
}

//MySchedules.$inject = ['$scope', '$routeParams', '$http'];

function MyGroups($scope, $routeParams, $http, $location, partialResults) {

//  $http.get('inspections/neilston_p1.json').success(function(data) {
//    $scope.inspection = data;
//  });
  $scope.inspection = partialResults.getObject();
  $scope.groupix = $location.search()['groupix'];
  $scope.doTheBack = function() {
    window.history.back();
  };    
}

//MyGroups.$inject = ['$scope', '$routeParams', '$http', '$location'];

function MyFaults($scope, $routeParams, $http, $location, partialResults) {

//  $http.get('inspections/neilston_p1.json').success(function(data) {
//    $scope.inspection = data;
    $scope.groupix = $location.search()['groupix'];
    $scope.faultix = $location.search()['faultix'];
    //$scope.currDetail = data.HEADER[$scope.groupix].GROUP[$scope.faultix];
    $scope.inspection = partialResults.getObject();
    $scope.currDetail = $scope.inspection.HEADER[$scope.groupix].GROUP[$scope.faultix];
//  });

  $scope.checks = [
    {check:'P', bg:'green'},
    {check:'F', bg:'red'},
    {check:'N', bg:'white'}
  ];

  $scope.setFault = function(){
//    alert( 'value1: ' + $scope.currDetail.DETAIL[0].VALUE + ', grpix: ' + $scope.groupix + ', faultix: ' + $scope.faultix);
//	  alert( 'title1: ' + $scope.currDetail.DETAIL[0].TITLE);
	  $scope.inspection.HEADER[$scope.groupix].GROUP[$scope.faultix] = $scope.currDetail;
  };

  $scope.getFaultColor = function(fcheck){
        //alert( 'fcheck: ' + fcheck);
	var fcolor = "warning";
	if (fcheck == "P") 
	{ fcolor = "success"; }
	else
	if (fcheck == "F")
	{ fcolor = "error"; }
	//alert( 'fcolor: ' + fcolor);
	return fcolor;
    };

  $scope.doTheBack = function() {
    window.history.back();
  };    
}

//MyFaults.$inject = ['$scope', '$routeParams', '$http', '$location'];
