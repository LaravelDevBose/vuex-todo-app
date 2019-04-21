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
    },

    async addTodo({ commit }, title){
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos',
            {title:title,complete:false,}
            );
        commit('newTodo', response.data);
    }
};


//declare mutations
const mutations = {
    setTodos:(state, todos)=>(state.todos = todos),
    newTodo:(state, todo)=>state.todos.unshift(todo),
};

export default {
    state,
    getters,
    actions,
    mutations,
}