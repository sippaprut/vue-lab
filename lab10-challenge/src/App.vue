<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="pageDynamic = 'appBlue' " >Load Blue Template</button>
                <button class="btn btn-success" @click="pageDynamic = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="pageDynamic = 'appRed'">Load Red Template</button>
                <hr>
                <keep-alive>
                    <component :is="pageDynamic">
                        <p slot="title">Blue Template</p>
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {

        data() {
            return {
                pageDynamic : "appBlue"
            }
        } ,

        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
