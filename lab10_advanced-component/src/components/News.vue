<template>
    <div>
        This News for dynamic Compontent
        
        <button type="button" @click="counter++ " class="btn btn-xs btn-warning">button</button> <br/>
        
        Counter is {{ counter }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter : 0
            }
        } ,
        destroyed() {
            console.log( "Destroyed App news" );
        } ,

        deactivated() {
            console.log('deactivated');
        } ,

        activated () {
            console.log('activated');
        }

    }
</script>