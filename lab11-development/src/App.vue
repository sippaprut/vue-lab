<template>
    <div class="container">
        <app-header></app-header>
        <app-quotes></app-quotes>
        <app-footer></app-footer>
    </div>
</template>

<script>

    import Header from './components/partition/Header.vue'
    import Footer from './components/partition/Footer.vue'
    import Quotes from './components/quotes/Quotes.vue'

    export default {
        components : {
            'app-header' : Header ,
            'app-footer' : Footer ,
            'app-quotes' : Quotes
        }
    }
</script>

<style>
</style>
