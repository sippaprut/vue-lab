<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <serverList></serverList>
        <hr>
        <app-footer></app-footer> 
    </div>
</template>

<script>

    import Header from './components/Header.vue'
    import ServerList from './components/ServerList.vue'
    import Footer from './components/Footer.vue'

    export default {
        components : {
            'app-header' : Header ,
            ServerList , //es6 
            'app-footer' : Footer
        }
    }

</script>
