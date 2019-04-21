import axios from 'axios';


//declare state
const state = {
    todos:[
        {
            id:1,
            title:'Todo One'
        },
        {
            id:2,
            title:'Todo Two'
        },
        {
            id:3,
            title:'Todo Three'
        }
    ]
};


//declare getters
const getters = {
    allTodos:(state)=>state.todos,
};


//declare actions
const actions = {};


//declare mutations
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations,
}