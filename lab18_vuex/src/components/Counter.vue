<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement( { numbers : 20 , duration : 500 } )">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement( { numbers : 10 , duration : 500 } )">Decrement</button>
    </div>


    
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        methods: {
            ...mapActions([
                'asyncIncrement' ,
                'asyncDecrement'
            ]),
            // increment() {
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     this.$store.commit('decrement');
            //    // this.$emit('updated', -1);
            // }
        }
    }
</script>