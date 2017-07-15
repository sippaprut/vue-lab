<template>
    <div class="container">
        
        <input type="text" v-model="fruitSearch" name="" value="">

        <ul>
            <li @click="callMix" v-for="fruit in filterFruits">{{ fruit }}</li>
        </ul>


    </div>
</template>

<script>
    
    import { fruitMixin } from './FruitMixin.js'

    export default {
        mixins : [ fruitMixin ] ,
        methods : {
            callMix() {
                this.testMix();
            }
        }
    }
</script>

<style>

</style>
