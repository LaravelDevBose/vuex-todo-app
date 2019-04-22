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
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10');
        commit('setTodos',response.data);
    },

    async addTodo({ commit }, title){
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos',
            {title:title,complete:false,}
            );
        commit('newTodo', response.data);
    },
    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo',id);
    },
    async filterTodos({commit}, limit){
        console.log(limit);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos',response.data);
    },
    async completeTodo({commit}, compTodo){
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${compTodo.id}`);

        commit('doneTodo', compTodo);
    }
};


//declare mutations
const mutations = {
    setTodos:(state, todos)=>(state.todos = todos),
    newTodo:(state, todo)=>state.todos.unshift(todo),
    removeTodo:(state, id)=>state.todos = state.todos.filter(todo=>todo.id !== id),
    doneTodo:(state, compTodo)=>{
        const index = state.todos.findIndex(todo => todo.id === compTodo.id);

        if(index !== -1){
            state.todos.splice(index, 1, compTodo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}