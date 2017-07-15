<template>
    <div class="container">

        <div class="tile is-vertical title-page">
            <div class="clearfix"></div>
            <H1 class="title">Portfolio</H1>
            <div class="clearfix"></div>
        </div>

        <div class="clearfix"></div>
        <div class="columns">
            <pf-item v-for="item in items" :portfolio="item"></pf-item>     
        </div>
        <div class="clearfix"></div>

       
        
    </div>
</template>

<script>

    import PortfolioItem from './Portfolio_item.vue'

    export default {
        data() {
           return {
               items : [
                   {
                       id : 1 , 
                       name : 'Sunset Hills' ,
                       photo : 'http://sunsethill.funeralnetcustomsolutions.com/themes/ryantemp-greengold/images/logo.jpg' ,
                       url : 'http://sunsethill.funeralnetcustomsolutions.com/_dev/earrangement/' ,
                       detail : '' 
                   } ,
                   {
                       id : 2 , 
                       name : 'Luckpim' ,
                       photo : 'http://www.luckpim.com/images/logo.png' ,
                       url : 'http://www.luckpim.com/' ,
                       detail : '' 
                   } ,
                   {
                       id : 3 , 
                       name : 'Sunee Shoping' ,
                       photo : 'http://www.suneeshopping.com/assets/images/logo.png' ,
                       url : 'http://www.suneeshopping.com/' ,
                       detail : '' 
                   }

               ]
           } 
        } ,

        components : {
            'pf-item' : PortfolioItem
        }
    }
</script>
