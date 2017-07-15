<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>

                <select v-model="animateType" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br/><br/>
                
                <button type="button" class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br/> </br>
                
                <transition :name="animateType" mode="">
                    <div class="alert alert-info" v-if="show">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        <strong>This is some Info</strong> Alert body ...
                    </div>
                </transition>

                <transition :name="animateType" type="animation" >
                    <div class="alert alert-info" v-show="show">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        <strong>This is some Info</strong> Alert body ...
                    </div>
                </transition>

                <transition 
                appear 
                enter-active-class="animated bounce"
                leave-active-class="animated shake"
                >
                    <div class="alert alert-info" v-if="show">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        <strong>This is attr Appear</strong> For init to the Dom
                    </div>
                </transition>

                <transition :name="animateType" mode="out-in" >
                    <div class="alert alert-info" v-if="show" key="info">
                        <strong>This is some Info</strong> Alert body ...
                    </div>
                    <div class="alert alert-danger" v-else key="danger" >
                        <strong>This is some alert-danger </strong> animation use uniqe key
                    </div>
                </transition>



        
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show : true ,
                animateType : 'fade'
            }
        }
    }
</script>

<style>
    .fade-enter {
        opacity : 0;
    }

    .fade-enter-active {
        transition : opacity 3s;
    }
    
    .fade-leave {

    }

    .fade-leave-active {
        transition : opacity 0s;
        opacity: 0;
    }

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
