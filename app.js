(function(){
	var app = angular.module("add-player",[]);
	
    app.controller("LeaderboardController",['$http','$scope',function($http,$scope){
		    $scope.players=[];
		    $scope.showbuttons=true;
        
        $scope.load = function(){
            $http.get(window.location.href+"/display.php").success(function(response){
                $scope.players = response;
            });
        }

	      $scope.request = function(){
            var response=$http({
                method: "post",
                url: window.location.href+"/submit.php",
                data: {
                    name: $scope.name,
                    score: $scope.score
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            $scope.load();
            $scope.name="";
            $scope.score=null;
	      };
		
		   $scope.editPlayer=function(player,score){
			      var response=$http({
                method: "post",
                url: window.location.href+"/edit.php",
                data: {
                    id: player.id,
                    score: score
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
		        $scope.load();
        };
		
        $scope.deletePlayer=function(player){
            var response =  $http({
                method: "post",
                url: window.location.href+"/delete.php",
                data: {
                    id: player.id
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            $scope.load();
        };		
        
		    $scope.sortbyname=function(){
			      var compare=function(a,b){
				        if (a.name<b.name){
					          return -1;
                }
				        if (a.name>b.name){
                    return 1;
                }
                return 0;					
		      	};
		        $scope.players.sort(compare);
		    }
		
		    $scope.sortbyscore=function(){
			      var compare=function(a,b){
				        if (a.score<b.score){
				           	return -1;
                }
				        if (a.score>b.score){
                    return 1;
                }
                return 0;					
			      };
		        $scope.players.sort(compare);
		  }
		
		
	}]);
	
    
})();
