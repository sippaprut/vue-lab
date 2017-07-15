<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ myAge }} </p>
        <button @click="editAge">Edit Age</button>

    </div>
</template>

<script>

import { eventBus } from '../main.js'

export default {
	props : ['myAge'] ,

	methods : {
		editAge() {
			this.myAge = 30;
			//this.$emit('ageWasEdited' , this.myAge );
			//eventBus.$emit('wasBusEdited' , this.myAge );
			eventBus.changeAge( this.myAge );
		}
	}
}

</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
