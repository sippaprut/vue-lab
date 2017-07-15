import * as names from '../names.js';

const state = {
    counter : 0 
};

const getters = {
    //es6 style namespace
    [names.DOUBLE_COUNTER] : states => {
        return states.counter * 2;
    } ,

    [names.STRING_COUNTER] : states => {
        return "Number of clicked is " + states.counter;
    } ,

    stringCounter2 : states => {
        return "**** Your counter is "+ states.counter + " ******"
    } ,
};

/** Mutations ใช้สำหรับการจัดการ state ถ้ามีการเปลี่ยนข้อมูล State ให้ทำที่ mutations เท่านั้น */
/** ห้าม ajax ในส่วนเพราะมันจะไม่ทำงาน */
const mutations = {
    increment : (states , amount) => {
        states.counter += amount;
    } ,
    decrement : (states , amount) => {
        states.counter-= amount;
    } ,
}

const actions = {
    increment : (context , number) => {
        //เรียกคำสั้งใน mutations ให้อัพเดท states
        context.commit('increment' , number);
    } ,
    //es6
    decrement : ({ commit } , number) => {
        commit('decrement' , number);
    } ,

    asyncIncrement : ( { commit } , payload) => {
        setTimeout(() => {
            commit('increment' , payload.numbers);
        } , payload.duration)
    } ,

    asyncDecrement : ( { commit } , payload) => {
        setTimeout(() => {
            commit('decrement' , payload.numbers);
        } , payload.duration)
    } 
}


export default {
    state ,
    getters ,
    mutations ,
    actions
}