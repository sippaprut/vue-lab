<template>
    <div class="row-fluid">
        <quotes-process
            :limit="limit"
            :count="messages.length"
        ></quotes-process>
        
        <div class="clearfix"></div>
        <quotes-forms
            :lists="messages"
            :limit="limit"
            @newMessage="createdMessage"
           
        ></quotes-forms>
        <div class="clearfix"></div>
        <quotes-lists 
            :lists="messages"
            @deleteMessage="deleteMessage"
          >
        </quotes-lists>
    </div>
</template>

<script>

    import Process from './Process.vue';
    import Forms from './Forms.vue';
    import Lists from './Lists.vue'

    export default {
        data() {
            return {
                messages : [ 'List test'] ,
                limit : 10
            }
        } ,
        components : {
            'quotes-process' : Process ,
            'quotes-forms' : Forms ,
            'quotes-lists' : Lists
        } ,

        methods : {
            createdMessage(quote)
            {
                this.messages.unshift( quote);
            } ,
            deleteMessage(index)
            {
                this.messages.splice( index , 1 );
            }
        }

        // watch: {
        //     messages( newMessage , oldMessage ){
        //         console.log( newMessage );
        //         //console.log( oldMessage );
        //     }
        // }

    }
</script>
<style>
.clearfix{ clear:both; margin-bottom: 10px;}
</style>