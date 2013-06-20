'use strict';

/* Controllers */

function MyCtrl1() {}
MyCtrl1.$inject = [];

function MyCtrl2() {
}
MyCtrl2.$inject = [];

function MySchedules($scope, $http, partialResults) {
  $http.get('inspections/neilston_p1.json').success(function(data) {
    $scope.inspection = data;
//    alert( 'INSP: ' + $scope.inspection.INSPECTION);
    partialResults.setObject(data);
  });

  $scope.getSchedURL = function(ix){
    //alert( 'ix: ' + ix);
    var f_url = "#/groups?groupix="+ix;
    if ($scope.inspection.HEADER[ix].GROUP.length == "1") 
    { f_url = "#/faults?groupix="+ix+"&faultix=0"; }
  //alert( 'f_url: ' + f_url);
  return f_url;
  };

}

//MySchedules.$inject = ['$scope', '$routeParams', '$http'];

function MyGroups($scope, $location, partialResults) {

  $scope.inspection = partialResults.getObject();
  $scope.groupix = $location.search()['groupix'];
  $scope.doTheBack = function() {
  window.history.back();
  };    
}

//MyGroups.$inject = ['$scope', '$routeParams', '$http', '$location'];

function MyFaults($scope, $routeParams, $http, $location, partialResults) {

    $scope.groupix = $location.search()['groupix'];
    $scope.faultix = $location.search()['faultix'];
    $scope.inspection = partialResults.getObject();

  $scope.checks = [
    {check:'P', class:'success'},
    {check:'F', class:'error'},
    {check:'N', class:'warning'}
  ];

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
    //alert( 'value1: ' + $scope.inspection.HEADER[$scope.groupix].GROUP[$scope.faultix].DETAIL[0].VALUE + ', title: ' + $scope.inspection.HEADER[$scope.groupix].GROUP[$scope.faultix].DETAIL[0].TITLE);
    window.history.back();
  };    
}

//MyFaults.$inject = ['$scope', '$routeParams', '$http', '$location'];
