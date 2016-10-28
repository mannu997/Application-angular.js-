(function(){
	var app = angular.module("add-player",[]);
	
	var data=[];
	
	app.controller("PlayerController",function(){
		this.entries=data;
	});
	
	app.controller("EditScore",function($scope){
		this.editScore=$scope.score;
		this.edit=function(player){
		player[score]=this.editScore;
		};
	});
	
	app.controller("FormController",function($scope){
		this.entry={name:$scope.name,
                    score:$scope.score,
                    deleted:false					
		};
		
		this.addEntries=function(){
		    data.push(this.entry);
			this.entry={};
		};
	});
    
})();
