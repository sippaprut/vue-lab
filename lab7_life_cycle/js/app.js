var app = new Vue({
    el : "#app" ,
    data : {
        title : "Hello Life cycle"
    } ,

    beforeCreate : function() {
        console.log("beforeCreate()");
    } ,

    created : function() {
        console.log("created()");
    } ,

    beforeMount : function() {
        console.log("beforeMount()");
    } ,

    mounted : function() {
        console.log("mounted()");
    } ,

    beforeUpdate : function() {
        console.log("beforeUpdate()");
    } ,

    updated : function() {
        console.log("updated()");
    } ,

    beforeDestroy : function() {
        console.log("beforeDestroy()");
    } ,

    destroyed : function() {
        console.log("destroyed()");
    } ,

    methods  : {
        destroy : function() {
            //Vue destroy ยกเลิก vue
            this.$destroy();
        }
    }

})