angular.module('myApp',['ngMaterial'])
.controller("c", function($scope) {
  $scope.client_id = "m4fyzznv5j844d8q3plttncoxm2px6";
  $scope.redirect_uri = "https://cbenni.com/oauthgen/redirect";
  $scope.scopes = ["user_read","user_blocks_edit","user_blocks_read","user_follows_edit","channel_read","channel_editor","channel_commercial","channel_stream","channel_subscriptions","user_subscriptions","channel_check_subscription","chat_login","channel_feed_read","channel_feed_edit"]
  $scope.selectedscopes = {};
  $scope.getAuthUrl = function(){
    var selscopes = [];
    for(var i=0;i<$scope.scopes.length;++i) {
      if($scope.selectedscopes[$scope.scopes[i]]) selscopes.push($scope.scopes[i]);
    }
    return "https://api.twitch.tv/kraken/oauth2/authorize"
      +"?response_type=token"
      +"&client_id="+$scope.client_id
      +"&redirect_uri="+encodeURIComponent($scope.redirect_uri)
      +"&scope="+selscopes.join("+");
  }
});