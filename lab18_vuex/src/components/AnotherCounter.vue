<template>
    <div>
        <hr/>
        <button class="btn btn-primary" @click="addNew(100)">Increment</button>
        <button class="btn btn-primary" @click="remove(50)">Decrement</button>
    </div>
</template>

<script>
    //import { mapMutations } from 'vuex'
    import { mapActions } from 'vuex';
    export default {
        methods: {

            ...mapActions({
                addNew : 'increment' , //มันauto add parameter ให้
                remove : 'decrement'
            }) ,

            //ตัวอย่างการเรียกใช้ action โดย ไม่ได้ใช้ mapActions
            // increment(by) { 
            //     this.$store.dispatch('increment' , by);
            // }

            // ...mapMutations({
            //     addNew : 'increment' ,
            //     remove : 'decrement'
            // }),


            // increment() {
            //     this.$store.commit('increment')
            //     //this.$store.state.counter++;
            // },
            // decrement() {
            //     this.$store.commit('decrement')
            //     //this.$store.state.counter--;
            //    // this.$emit('updated', -1);
            // }
        }
    }
</script>