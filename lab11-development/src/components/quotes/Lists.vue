<template>
    <div>
        <ul class="list-group">
             <li v-for="(message , index) in lists" class="list-group-item">
                <a @click="deleteItem(index)" class="delete-button">X</a>
                {{ message }}
            </li>
            <!--<app-quote :quote="message" v-for="(message , index) in lists">
                {{ quote }}
            </app-quote>-->
        </ul>
    </div>
</template>

<script>

   //import Quote from './Quote.vue';

    export default {
        // components : {
        //     'app-quote' : Quote
        // } ,
        props : ['lists'] ,
        methods : {
            deleteItem( index )
            {
                if ( confirm("Do you want to Delete this item?"))
                this.$emit('deleteMessage' , index);
            }
        }
    }
</script>

<style scoped>
   .delete-button { 
       float : right;
       cursor: pointer;
   }
</style>