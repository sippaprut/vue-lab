import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

//Add the plugin
Vue.use(VueResource);


//Setting option All request send to this url
Vue.http.options.root = 'https://vue-resource-test-70c05.firebaseio.com/';
Vue.http.interceptors.push( (request , callback ) => {
   if ( request.method == 'POST') 
   {
     request.method = 'PUT';
   }
   callback(response => {
      response.json = () => {
          return { messages : response.body }
      }
   });
});



new Vue({
  el: '#app',
  render: h => h(App)
})
