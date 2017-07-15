import Vue from 'vue';
import Vuex from 'vuex';
import CounterStore from './modules/counter.js'
import ValueStore from './modules/value.js'

//Store ใช้สำหรับเก็บข้อมูลของ state เป็น State การในการเรียกใช้งาน

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
       
    } ,
    getters : {
        

       

    } ,

    /** Mutations ใช้สำหรับการจัดการ state ถ้ามีการเปลี่ยนข้อมูล State ให้ทำที่ mutations เท่านั้น */
    /** ห้าม ajax ในส่วนเพราะมันจะไม่ทำงาน */
    mutations : {
       

       

    } ,

    actions : {
       
    } ,

    //include another store
    modules : {
        value : {
             namespaced : true ,
             //ValueStore
             modules :{
                ValueStore
             }
        } ,

        CounterStore ,
        //ValueStore ,

        messages : {
            namespaced : true , 
            state : {
                messages : [
                    'Test Message'
                ]
            } ,
            getters : {
                commentLists : states => {
                    return states.messages;
                }
            } ,
            mutations : {
                addComment : (states , message) => {
                    states.messages.push(message)
                }
            } ,

            actions : {
                addComment : ( { commit } , message ) => {
                    commit('addComment' , message);
                }
            }

        }

    }


})