import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowcase-filter' , (value) => {
  return value.toLowerCase() ;
});

//Global mixins
Vue.mixin({
  methods : {
    testMix() {
       console.log('testMix!!')
    }
  } ,
  created() {
     console.log("Create Mixins in Global!!");
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
