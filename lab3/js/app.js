var app = new Vue ({
	el : "#app" , 
	data : {
		name : "Max" ,
		counter : 0  ,
		secondCounter : 0 ,
		link : 'http://www.google.com' ,
		img : "https://instagram.fbkk5-1.fna.fbcdn.net/t51.2885-15/e35/13181489_1771269613104873_256026176_n.jpg?ig_cache_key=MTI1NDEyNDE0NzY0NzU3ODcwNg%3D%3D.2"
	} ,
	computed : {
		output : function() {
			console.log("computed");
			return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
		}
	} ,
	watch :  {
		counter : function(value) {
			var vm = this ;
			console.log(value);
			setTimeout(function(){
				if (vm.counter == 5 )
				vm.counter = 0;
			} , 3000);
		}
	} ,
	methods : {
		result : function() {
			console.log("methods");
			return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
		}
	}
})