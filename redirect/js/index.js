angular.module('myApp',['ngMaterial'])
.controller("c", function($scope, $http) {
  var m = /access_token=(\w+)/g.exec(window.location.hash);
  if(m) $scope.token = m[1];
  m = /scopes=(\w+)/g.exec(window.location.hash);
  if(m) $scope.scopes = m[1].replace("+",", ");
  $scope.url = "https://api.twitch.tv/kraken/";
  $scope.makeRequest = function() {
    $http({
      method: $scope.method,
      url: "https://jsonp.afeld.me/?url="+$scope.url,
      headers: {
        "Authentication": "OAuth "+$scope.token,
        "Client-ID": "m4fyzznv5j844d8q3plttncoxm2px6",
        "Accept": "application/vnd.twitchtv.v"+$scope.api_version+"+json"
      }
    }).then(function(response){
      $scope.api_response_body = JSON.stringify(JSON.parse(response.body), null, 2);
      $scope.api_response_status = 200;
    }, function(response){
      $scope.api_response_body = response.body;
      $scope.api_response_status = response.status;
    });
  }
});