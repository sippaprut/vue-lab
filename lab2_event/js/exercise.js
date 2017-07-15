var exercise = new Vue ({
	el : "#exerise" , 
	data : {
		value : ''
	} , 

	methods : {
		alertMessage : function() {
			alert("Show Aler message ");
		} ,
		keySetValue : function( event ) {
			this.value = event.target.value;
			console.log(event);
		}
	}


})