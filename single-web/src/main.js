import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import VueFirebase from 'vuefire'
import Firebase from 'firebase'

import { routes } from './routers'
import { _ } from 'lodash'

import Buefy from 'buefy'
import { Swipe, SwipeItem } from 'vue-swipe';
//import './assets/css/vue-swipe.css'

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

Vue.use(VueRouter)

const router = new VueRouter({
  routes ,
  mode : 'history'
});

Vue.use(VueFirebase)

export const fireBaseConfig = {
    apiKey: "AIzaSyA0eWYH7DBA4iaV9l_iB5-o_Tp8Y-lMHCE",
    authDomain: "vue-singleweb.firebaseapp.com",
    databaseURL: "https://vue-singleweb.firebaseio.com",
    projectId: "vue-singleweb",
    storageBucket: "vue-singleweb.appspot.com",
    messagingSenderId: "559658847728"
}

export const fireBaseApp = Firebase.initializeApp(fireBaseConfig);
export const fireBaseDB = fireBaseApp.database();


Vue.use(Buefy)



new Vue({
  el: '#app',
  render: h => h(App) ,
  router
})
