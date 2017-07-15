const state = {
    value : 0
};

const getters = {
    value : states => {
        return states.value;
    }
};

const mutations = {
    updateValue : ( states , value ) => {
        states.value = value;
    }
};

const actions = {
     updateValue : ( {commit} , payload) => {
        commit('updateValue' , payload );
    }
}

export default {
    state ,
    getters ,
    mutations ,
    actions
}