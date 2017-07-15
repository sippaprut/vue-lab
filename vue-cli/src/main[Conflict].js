import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Footer from './Footer.vue'

Vue.component('home' , Home);
Vue.component('footer-website' , Footer);

new Vue({
  el: '#app',
  render: h => h(App) 

})
