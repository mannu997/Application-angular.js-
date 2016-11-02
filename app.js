(function(){
	var app = angular.module("add-player",[]);
	
	app.controller("LeaderboardController",function($scope){
		$scope.players=[];
		$scope.showbuttons=false;
		
		$scope.createPlayer=function(name,score){
			if ($scope.showbuttons==false)
				$scope.showbuttons=true;
			var player = {
				"name":name,
				"score":score
			}
			$scope.players.push(player);
			$scope.name="";
			$scope.score=null;
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
		
		
	});
	
    
})();
