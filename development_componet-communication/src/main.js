import Vue from "vue";
import App from "./App.vue";

export const ServerBus = new Vue({
  methods: {
    selectServer( server )
    {
        this.$emit( 'viewServerDetail' , server );
    } ,
    clearServer ()
    {
        this.$emit( 'clearServer' , false );
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
