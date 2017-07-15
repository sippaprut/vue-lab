<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{  text | reversesText }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ text | reversesText | length-text }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>{{ specialText }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>


    export default {
       // mixin : [] ,
        // data() {
        //     return {
        //         text : "Hello World Vue Js"
        //     }
        // } ,

        // computed : {
        //     specialText()
        //     {
        //         return this.text.split('').reverse().join('') + " ( "+ this.text +" )";
        //     }
        // } ,

        filters : {
            reversesText(value) {
                console.log(value)
                return value.split('').reverse().join('');
               // return value.reverses();
            }
        }
    }
</script>

<style>
</style>
