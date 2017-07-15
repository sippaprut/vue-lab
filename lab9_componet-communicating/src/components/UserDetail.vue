<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>My name is {{ switchName() }}</p>
        <p>My age is {{ myAge }}</p>
        <button @click="resetName">Reset</button>
        <button @click="resetFN()">Reset From parent</button>
    </div>
</template>

<script>
	import { eventBus } from '../main.js'
	export default {
		//props : ['myName'] , //Get varible from parent
		/* Validate props*/
		props : {
			/*It is mean myName have to String and required */
			myName : {
				type : String ,
				required : true ,
				//default : ""
			}  ,
			myAge : Number ,
			resetFN : Function
		} ,

		methods : {
			switchName() {
				return this.myName.split(" ").reverse().join(" ");
			} ,
			resetName() {
				this.myName = 'John Doe';
				this.$emit('nameWasReset' , this.myName ); //send data to parent
			}
		} ,
		created() {
			eventBus.$on('ageWasEdited' , ( age ) => {
				this.myAge = age
			})
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
