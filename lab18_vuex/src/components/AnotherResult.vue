<template>
    <div>
        <p>Another Counter</p><hr>
        <p>Counter is: {{ counter }}</p>
        <p>{{ clickButton }}</p>
        <p>{{ stringCounter2 }}</p>
    </div>
    
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as names from '../store/names.js';
    export default {


        computed : {
            ...mapGetters({
                counter : names.DOUBLE_COUNTER ,
                clickButton : names.STRING_COUNTER , 
                stringCounter2 : 'stringCounter2'
            })
        } ,
        created() {
            // console.log(names.DOUBLE_COUNTER);
            // console.log(names.STRING_COUNTER);
        }

        // computed : mapGetters({
        //     counter : 'doubleCounter' ,
        //     clickButton : 'stringCounter'
        // })
        

        // computed : {
        //     counter() {
        //         return this.$store.getters.doubleCounter;
        //     } , 
        //     clickButton() {
        //         return this.$store.getters.stringCounter;
        //     }
        // }
    }
</script>