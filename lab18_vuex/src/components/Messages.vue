<template>
    <div>
        <h1>Comment</h1>
        <app-message :message="message" v-for="message in messages"></app-message>
        <hr>
        <app-message-form></app-message-form>

    </div>
</template>

<script>
    import messageItems from './MessageItem.vue';
    import messageForm from './MessageForm.vue';

    import * as names from '../store/names.js';
    import { mapGetters } from 'vuex';

    export default {
        components : {
            'app-message' : messageItems ,
            'app-message-form' : messageForm
        } ,

        computed : {
           ...mapGetters({
             'messages' :  names.MESSAGE_LISTS
           })
        } ,

        created(){
            console.log(names.MESSAGE_LISTS);
        }

    }
</script>

