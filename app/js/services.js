'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

var app = angular.module('myps', []);

app.service('partialResults', function() {
    var inspection = {
  "STATION" : "NEILSTON",
  "STATIONID" : 258,
  "PLATFORM" : "1",
  "INSPECTION" : "PRIMARY",
  "REGIME" : "SQR",
  "FAULT_TYPE" : "REACTIVE",
  "FAULT_CATEGORY" : "STATION",
  "AUTHORITY" : "SPT",
  "USERID" : "U140",
  "INSPECTION_DATE" : "",
  "TS" : "",
  "WEATHER" : "",
  "HEADER" : [{
    "CONFIGID" : "177",
    "TITLE" : "TICKET OFFICE",
    "SCHEDULE" : "1",
    "FAILPOINT" : "L",
    "FAILTYPE" : "S",
    "GROUP" : [{
      "CONFIGID" : "178",
      "TITLE" : "Null Group Created for Schedule: 1",
      "GROUPS" : "0",
      "DETAIL" : [{
        "CONFIGID" : 297,
        "TITLE" : "TICKET OFFICE CLOSED",
        "SSCODE" : "1.3",
        "EXTRA" : "N",
        "VALUE" : "N"
      }]
      }]
      }]
};
    
    return {
        setObject: function(value) {
            inspection = value;
        },
        getObject: function() {
            return inspection;
        }
    }
});

