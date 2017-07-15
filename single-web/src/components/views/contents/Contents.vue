<template>
    <div class="container">
        <div class="title-page">
            <h1>Contents</h1>
        </div>

        <div class="clearfix"></div>
        <div class="container-addnew">
            <router-link class="button is-primary" :to="{ name: 'contentAdd'}">
                Add new Content
            </router-link>
        </div>


        <content-list  :content="item" v-for="item in anObject"></content-list>
   
        <div class="clearfix"></div>
        <br/>

    </div>
</template>

<script>
     import { fireBaseDB } from '../../../main.js';
     import ContentsList from './ContentsList.vue';

     export default {

        data() {
            return {
                items : []
            }
        } ,

        components: {
            'content-list' : ContentsList
        } ,

        firebase : {
            anObject : {
                source : fireBaseDB.ref('contents')
            }
           // items : fireBaseDB.ref('contents')
        } ,

        created() {
             
        }

     }

</script>
