<template>
    <div class="container">
       <!-- <app-header></app-header>-->
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <hr>
                <router-view name="header-top"></router-view>
                <transition name="slide" mode="in-out">
                    <router-view></router-view>
                </transition>
                
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>

//    import Header from './components/Header.vue'

//     export default {
//         components : {
//             'app-header' : Header
//         }
//     }
</script>

<style>
     .slide-enter{
        opacity : 0px
    }

    .slide-enter-active {
        animation : slide-in 1s ease-out forwards;
        transition : opacity .5s;
    }
    
    .slide-leave {

    }

    .slide-leave-active {
       animation : slide-out 1s ease-out forwards;
        transition : opacity 1s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform : translateY(20px);
        }
        to {
            transform : translateY(0px);
        }
    }

    @keyframes slide-out {
        from {
            transform : translateY(0px);
        }
        to {
            transform : translateY(20px);
        }
    }
</style>
