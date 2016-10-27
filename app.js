(function(){
	var app = angular.module("add-player",[]);
	
	var data=[{
		name:"manmohan",
		score:"20",
		deleted:false,
	}];
	
	app.controller("PlayerController",function(){
		this.entries=data;
	});
	
	app.controller("FormController",function(){
		this.entry={};
		
		this.addEntries=function(list){
			this.entry[deleted]=false;
			list.push(this.entry);
			this.entry={};
		};
	});
    
})();
