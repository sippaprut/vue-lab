<template>

    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        {{ text | toUppercase | to-lowcase-filter }}
        <hr>
        <input type="text" v-model="fruitSearch" name="" value="">

        <ul>
            <li v-for="fruit in filterFruits">{{ fruit }}</li>
        </ul>
        <hr>
        <app-list></app-list>
    </div>

</template>

<script>
    
    import Lists from './Lists.vue';
    import { fruitMixin }  from './FruitMixin.js'

    export default {

        mixins : [  fruitMixin ] ,

        components: {
            'app-list' : Lists
        } ,
        data() {
            return {
                text : 'Hello There!' ,
                
            }
        } ,
        filters : {
            toUppercase( value ) {
                return value.toUpperCase();
            }
        } 
    }
</script>

<style>

</style>
