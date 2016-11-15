(function(){
	var app = angular.module("add-player",[]);
	
	app.controller("LeaderboardController",['$http','$scope',function($http,$scope){
		$scope.players=[];
		$scope.showbuttons=false;
        
        $scope.load = function(){
             $http.get(window.location.href+"display.php").success(function(data){
                    $scope.players = data;
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
            response.success(function (data) {
                    document.getElementById("message").textContent = "data submitted"
            });
	    };
		
		$scope.editPlayer=function(player,score){
			var index=$scope.players.indexOf(player);
			$scope.players[index]["score"]=score;
		};
		
		$scope.deletePlayer=function(player){
			var index=$scope.players.indexOf(player);
			$scope.players.splice(index,1);
			if ($scope.players.length==0 && $scope.showbuttons==true)
				$scope.showbuttons=false;
		};
		 
		$scope.sortbyname=function(){
			var compare=function(a,b){
				if (a.name<b.name)
					return -1;
				if (a.name>b.name)
                    return 1;
                return 0					
			};
		    $scope.players.sort(compare);
		}
		
		$scope.sortbyscore=function(){
			var compare=function(a,b){
				if (a.score<b.score)
					return -1;
				if (a.score>b.score)
                    return 1;
                return 0					
			};
		    $scope.players.sort(compare);
		}
		
		
	}]);
	
    
})();
