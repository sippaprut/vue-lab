<template>

    <div class="container">
        <div class="title-page">
            <h1 class="title">{{ data.name }}</h1>
        </div>
        <hr>

        <div class="columns">
            <div class="column">
                <img :src="data.photo" :alt="data.name">
            </div>
            <div class="column">
                <p>Url: {{ data.url }} </p>
            </div>
        </div>


        
        
    </div>

</template>


<script>

    import Portfolio from './Portfolio.vue'

    export default {
        props : ['id'] ,
        data() {
            return {
                data : []
            }
        } ,

        methods : {
            getData() {
                var vue = this;
                return _.find( Portfolio.data().items , o => {
                    return o.id == vue.id;
                }) ;
            }
        } ,

        created() {
            console.log(Portfolio.data().items)
            this.data = this.getData();
        }

    }
</script>