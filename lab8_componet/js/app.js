
//Change only 1 component
Vue.component('my-component' , {
    data : function(){
        return {
            status : 'Critical'
        }
    } ,
    template : '<p> Server Status: {{ status }} <br/><button @click="changeStatus">Change</button></p>' ,
    methods : {
        changeStatus : function() {
            this.status   = 'Normal';
        }
    }
})

//Global change
var data = {
    name : 'John Doe'
}
Vue.component('my-com2' , {
    data : function() {
        return data
    },
    template : '<p> My name: {{ name }} <br/> <button @click="changeName">Change name</button></p>' ,
    methods : {
        changeName : function() {
            this.name = 'Jane Doe'
        }
    }
})


var app = new Vue({
    el : "#app" ,
})