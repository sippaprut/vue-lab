import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routers'

Vue.use( VueRouter );

const router = new VueRouter({
  routes ,
  mode : 'history' , //set this for with out # 
  scrollBehavior( to , from , savedPosition ) {
    
      if ( savedPosition ) return savedPosition;

      if ( to.hash )
      {
        return { selector : to.hash }
      }
      return { x : 0 , y : 0 }
  }
})

//Glboal event router
//ทำงานก่อนเข้าหน้า component
router.beforeEach( ( to , from , next) => {
  console.log("Global beforeEach");
  next();
})


new Vue({
  el: '#app',
  router , //router : router
  render: h => h(App)
})
