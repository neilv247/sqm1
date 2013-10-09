'use strict';

var stninspections, inspId = "ENT_+_CAR_PARK_BY_PLAT_1_p1_182.json";

var getStnInspections = function($http, $q) {

var deferred = $q.defer();

  if (!stninspections) {
    $http.get('inspections/stations.json').success(function(data) {
      stninspections = data.items;
      deferred.resolve(data.items);
    });
  } else {
    deferred.resolve(stninspections);
  }

  return deferred.promise;
};

/* Controllers */

function MyCtrl1() {}
MyCtrl1.$inject = [];

function MyCtrl2() {
}
MyCtrl2.$inject = [];

function MyStations($scope, $http, partialResults) {
  $http.get('inspections/stations.json').success(function(data) {
    $scope.stations = data;
    stninspections = data;
//    alert( 'names: ' + $scope.stations.names[0]);
    partialResults.setObject(data);
    $scope.stationid = -1;
    for (var i = 0; i < $scope.stations.names.length; i++) {
    // set index for station properties
    if ($scope.stations.names[i] === 'STATIONID') {
        $scope.stationid = i;
    } else
    if ($scope.stations.names[i] === 'NAME') {
        $scope.station_name = i;
    } else
    if ($scope.stations.names[i] === 'PLATFORMID') {
        $scope.platformid = i;
    } else
    if ($scope.stations.names[i] === 'CONFIG_NAME') {
        $scope.config_name = i;
    } 
    }
     alert('data length = '+$scope.stations.data.length+' 1st name = '+$scope.stations.data[0][1]);
  });

/* change the following function to skip inspection type when only one and link to schedules directly 
 * also change to beuild inspection name properly - include id platform and type */
  $scope.getStationURL = function(ix){
    //alert( 'ix: ' + ix);
    var f_url = "#/schedules?inspid="+ix;
  //alert( 'f_url: ' + f_url);
  return f_url;
  };

}

function MySchedules($scope, $http, $location, partialResults) {
    var i_insp = $location.search()['inspid'];
    var x_config_name = stninspections.data[i_insp][3];
    var x_platform = stninspections.data[i_insp][2];
    var i_inspid = stninspections.data[i_insp][0];
    alert( 'INSP: ' + x_config_name + '_p' + x_platform + '_' + i_inspid + '.json');
    inspId = x_config_name + '_p' + x_platform + '_' + i_inspid + '.json';
    $http.get('inspections/'+inspId).success(function(data) {
    $scope.inspection = data;
    partialResults.setObject(data);
  });

  $scope.getSchedURL = function(ix){
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
