var app = new Vue({
	el : "#app" ,
	data : {
		attachedRed : false ,
		color : 'blue' ,
		width : 100
	} ,
	computed : {
		divClassChange : function() {
			return {
				red : this.attachedRed ,
				blue : ! this.attachedRed
			}
		} ,

		refeshStyle : function() {
			return {
				backgroundColor : this.color ,
				width : this.width + "px"
			}
		}
	}
})