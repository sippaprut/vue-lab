var app = new Vue({
	el : "#app" ,
	data : {
		effectClasses : {
			highlight : false ,
			shrink : true
		} ,

		objectClass : {
			visable : true ,
			'bg-blue' : true
		} ,

		bold : 'bold' ,
		userClass : '' ,
		isVisable : false ,
		boxwidth : 100 ,
		barWidth : 0,



	} ,

	methods: {
	    startEffect: function() {
	    	var vm = this;
	    	setInterval(function(){
	    		vm.effectClasses.highlight = ! vm.effectClasses.highlight;
	    		vm.effectClasses.shrink = ! vm.effectClasses.shrink;
	    	} , 1000);
	    } ,

	    startProgress : function() {
	    	var vm = this;
	    	var intervalId = setInterval(function(){
	    		if ( vm.barWidth < 100) vm.barWidth ++;
	    	} , 1000);

	    	if (vm.barWidth == 100 ) clearInterval(intervalId);
	    } ,

	    toggleClass : function() {
	    	this.isVisable = ! this.isVisable;
	    }

  	}
})