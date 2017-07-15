import Vue from 'vue'
import App from './App.vue'

//Communicate เปลี่ยนdataระหว่าง child to child โดยไม่เกี่ยวกับ parent
export const eventBus = new Vue({
	methods : {
		changeAge(age) 
		{
			this.$emit("ageWasEdited" , age);
		}
	}
});

new Vue({
  el: '#app',
  render: h => h(App) 
})

