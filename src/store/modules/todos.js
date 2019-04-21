import axios from 'axios';


//declare state
const state = {
    todos:[]
};


//declare getters
const getters = {
    allTodos:(state)=>state.todos,
};


//declare actions
const actions = {
    async fatchTodos({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos',response.data);
    }
};


//declare mutations
const mutations = {
    setTodos:(state, todos)=>(state.todos = todos)
};

export default {
    state,
    getters,
    actions,
    mutations,
}