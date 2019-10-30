let state = {
    todos: JSON.parse(window.localStorage.getItem("todos")) || [],
    currentItem: null,
    hashText: ''
}

let mutations = {
    ADDITEM(state, item) {
        state.todos.push(item)
    },
    DELETEITEM(state, item) {
        state.todos.splice(item, 1)
    },
    EDITITEM(state, { index, value }) {
        state.todos[index].value = value
    },
    TOGGLEALL(state) {
        for (const item of state.todos) {
            item.isCompleted = true
        }
    },
    CLEARCOMPLETED(state) {
        state.todos = state.todos.filter(item => !item.isCompleted)
    }
}

let actions = {
    addItem({ commit }, value) {
        if (value.trim()) {
            let obj = {
                value: e,
                id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 0,
                isCompleted: false
            }
            commit('ADDITEM', obj)
        }
    },
    deleteItem({ commit }, item) {
        commit('DELETEITEM', item)
    },
    toEditing(state, item) {
        state.currentItem = item
    },
    doneEdit({ commit, state }, { index, value }) {
        commit('EDITITEM', { index, value })
        state.currentItem = null
    },
    cancelEdit({ state }) {
        state.currentItem = null
    },
    toggleAll({ commit }) {
        commit('TOGGLEALL')
    },
    clearCompleted({ commit }) {
        commit('clearCompleted')
    }

}

let getters = {
    isAllCompleted(state) {
        return state.todos.every(item => item.isCompleted);
    },
    leftItems(state) {
        return state.todos.filter(item => !item.isCompleted).length;
    },
    filterTodos(state) {
        if (state.hashText === "completed") {
            return state.todos.filter(item => item.isCompleted);
        } else if (state.hashText === "active") {
            return state.todos.filter(item => !item.isCompleted);
        } else {
            return state.todos;
        }
    }
}

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})