
//Change only 1 component
var componentLocal = {
    data : function(){
        return {
            status : 'Critical'
        }
    } ,
    template : '<p> Server Status: {{ status }} <br/><button @click="changeStatus">Change</button> </p>' ,
    methods : {
        changeStatus : function() {
            this.status   = 'Normal';
        }
    }
};

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
    template : '<div> \
                    <h1>APP1</h1>\
                    <my-component></my-component>\
                    <my-component></my-component>\
                    <my-com2></my-com2>\
                    <my-com2></my-com2>\
                </div>' ,
    components : {
        'my-component' : componentLocal
    }
})

var app2 = new Vue({
    el : "#app2" ,
})