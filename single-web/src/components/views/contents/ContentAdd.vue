<template>
    <div class="container">
        <div class="title-page">
            <h1>Add new Contents</h1>
        </div>

        <div class="clearfix"></div>
        <form action="" >
            <b-field label="Title">
                <b-input value="" v-model="forms.title"></b-input>
            </b-field>

            <b-field label="Detail">
                <b-input type="textarea"  v-model="forms.message"></b-input>
            </b-field>

            <b-field label="By">
                <b-input value="" v-model="forms.post_by"></b-input>
            </b-field>

            <div class="field is-grouped">
                <p class="control">
                    <button @click.prevent="save()" class="button is-primary">Submit</button>
                </p>
                <p class="control">
                    <router-link class="button is-link" :to="{ name : 'contents'}">Cancel</router-link>
                </p>
            </div>

        </form>
         <div class="clearfix"></div>
    </div>
</template>

<script>
    import { fireBaseDB } from '../../../main.js';

    export default {
        data() {
            return {
                forms : {
                    title : '' ,
                    message : '' ,
                    post_by : ''
                }
            }
        } ,

        firebase : {
            items : fireBaseDB.ref('contents')
        } ,

        methods : {
            save(){
                this.$firebaseRefs.items.push(this.forms)
                this.$router.push({ name : 'contents' })
            }
        } ,
        created(){
            console.log(fireBaseDB)
        }
    }
</script>

<style scoped>
    .container { text-align: left;}
</style>