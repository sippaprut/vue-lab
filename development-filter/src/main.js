import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

Vue.filter('length-text' , ( value ) => {
    return value + " ( " + value.length + " )";
})


Vue.mixin({
    data() {
        return {
            text : "Hello Mixin Vue Js"
        }
    } ,
    created() {
        console.log('Global Mixin - Created Hook');
    } ,
    computed : {
        specialText()
        {
            return this.text.split('').reverse().join('') + " ( "+ this.text +" )";
        }
    } 
});

new Vue({
  el: '#app',
  render: h => h(App)
})
