var app = new Vue ({
	el : "#app" , 
	data : {
		counter : 1 ,
		x : 0 ,
		y : 0
	} ,
	methods : {
		increase : function( step , event ){
			this.counter += step;
			console.log(event);
		} ,

		updateCoordinates : function( e ) {
			this.x = e.clientX;
			this.y = e.clientY;
			console.log(e);
		} ,

		//เราไม่ต้องใช้ฟังก์ชั่นนี้ ถ้าเราใช้คำสั่งนี้ ใน Dom` v-on:mousemove.stop
		dummy : function(event) {
			event.stopPropagation();
		} ,

		alertMsg : function() {
			alert("Key up Alert");
		}

	}
})