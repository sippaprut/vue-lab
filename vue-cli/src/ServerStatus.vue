<template>
    <div>
        <p>Server Status : {{ status }}</p>
        <hr>
        <button @click="changeStatus">Change Status</button>
    </div>
</template>

<script>
    export default {
        data : function() {
            return {
                status : 'Critical'
            }
        } ,
        methods : {
            //es6 function
            changeStatus() {
                this.status = "Normal";
            }
        }
    }
</script>