var app = new Vue ({
	el : "#app" , 
	data : {
		value : 0
	}  ,
	computed : {
		result : function() {
			return this.value >= 37 ? "Done" : "not there Yet";
		}
	} ,
	watch : {
		result : function(value) {
			var vm = this;
			setTimeout(function(){
				if (vm.result == "Done") vm.value = 0;
			} , 5000)
		}
	}
})