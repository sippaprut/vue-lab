<template>
  <div id="app">
     <app-header></app-header>

        <router-view></router-view>
        
     <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './components/template/Header.vue'
import Footer from './components/template/Footer.vue'

export default {

  
  components : {
    'app-header' : Header ,
    'app-footer' : Footer
  } ,

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
