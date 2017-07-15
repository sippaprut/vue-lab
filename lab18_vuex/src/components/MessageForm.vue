<template>
    <div>
        <input type="text" v-model="message">
        <button @click="save">Add</button>
    </div>
</template>

<script>

    import { mapActions } from 'vuex';
    import * as names from '../store/names.js';

    export default {
        data() {
            return {
                message : ""
            }
        } ,

        methods : {
            save() {
                this.$store.dispatch( names.MESSAGE_SAVE,  this.message );
                this.message = "";
            }
        }
    }
</script>