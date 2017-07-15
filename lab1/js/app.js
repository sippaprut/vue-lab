var app = new Vue ({
	el : "#app" ,
	data : {
		name : 'Sippaprut Parawan' , 
		age : "29" ,
		img : "https://instagram.fbkk5-1.fna.fbcdn.net/t51.2885-15/e35/13181489_1771269613104873_256026176_n.jpg?ig_cache_key=MTI1NDEyNDE0NzY0NzU3ODcwNg%3D%3D.2"

		// title : "Hello World Vue2" ,
		// link : 'http://google.com' ,
		// htmlLink : '<a target="_blank" href="http://facebook.com">Facebook</a>'
	} ,
	methods : {

		randomNumber : function() {
			return Math.round(Math.random());
		} ,

		changeMyName : function ( str ) {
			this.name = str.target.value;
		}

		// sayHello : function() {
		// 	this.title = "Say Hello Vue2";
		// 	return this.title;
		// } ,


		// changeTitle : function ( input )
		// {
		// 	this.title = input.target.value;
		// 	//this.$set('title' , input.target.value );
		// }
	}
});