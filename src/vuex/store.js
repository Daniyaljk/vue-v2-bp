// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        addTodo(state, todo) {
            state.todos.push(todo);
        }
    }
});
