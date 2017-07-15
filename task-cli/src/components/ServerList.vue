<template>
	<div class="row">
        <div class="col-xs-12 col-sm-6">
            <ul class="list-group">
                <li
                        class="list-group-item"
                        @click="activeServer(index , $event)"
                        v-for="index in 5"
						:class="{ active : server_name == index }"
                        >

                    Server #{{ index }}
                </li>
            </ul>
        </div>
        <div class="col-xs-12 col-sm-6">
			<h1 v-if="server_name != ''">Server is {{ server_name }}</h1>
            <p>Server Details are currently not updated</p>
        </div>
    </div>
</template>

<script>
	export default {
		data : function() {
			return {
				server_name : false ,
			}
		} ,
		methods : {
			activeServer( name , event ) {
				this.server_name = name;
			} 
			
		}
	}
</script>
<!-- scoped is use only this template -->
<style scoped>
	.list-group-item {
		cursor: pointer;
	}
</style>


