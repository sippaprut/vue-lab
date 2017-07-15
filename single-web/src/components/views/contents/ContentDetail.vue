<template>

    <div class="container">
        <div class="title-page">
            <h1 class="title">
                {{  content.title  }}
            </h1>
        </div>

         <div class="columns">
            {{ content.message }}
        </div>
    
    </div>

</template>

<script>
    import { fireBaseDB } from '../../../main.js';
    export default {
        props : ['id'] ,
        data() {
            return {
                item : []
            }
        } ,

        created() {
            this.$bindAsObject('content' , fireBaseDB.ref('contents').child(this.id))
        } 
    }
</script>