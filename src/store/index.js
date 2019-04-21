import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

//use Vuex

Vue.use(Vuex);

//create Store
export default new Vuex.Store({
    modules:{
        todos
    }
});
