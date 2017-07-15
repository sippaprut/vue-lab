import Vue from 'vue'
import App from './App.vue'

//v-highlight
Vue.directive('highlight' , {
  bind( el , binding , vnode){
    console.log(binding)

    let deley = 0;
    //v-highlight:background.deleyed
    if ( binding.modifiers['delayed'] )
    {
       deley = 3000;
    }
    console.log(binding.modifiers['delayed'])
    setTimeout(function(){
      if ( binding.arg === 'background') el.style.backgroundColor = binding.value; //v-highlight:background='value'
      else el.style.color = 'red';

    } , deley);
    
    //el.style.backgroundColor = binding.value //v-highlight='value'
    //el.style.backgroundColor = 'green';//v-highlight
  }
}); 

new Vue({
  el: '#app',
  render: h => h(App)
})
