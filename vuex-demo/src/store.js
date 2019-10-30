import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let state = {
    count: 0
}

let mutations = {
    ADD(state) {
        state.count++
    },
    LESS(state) {
        state.count--
    }
}

let actions = {
    add({ commit }) {
        commit('ADD')
    },
    less({ commit }) {
        commit('LESS')
    },
    oddAdd({ commit, state }) {
        if (state.count % 2 === 1) {
            commit('ADD')
        }
    },
    asyncAdd({ commit }) {
        setTimeout(() => {
            commit('ADD')
        }, 1000)
    }
}

let getters = {
    cstate(state) {
        return state.count % 2 === 0 ? 'Even' : 'Odd'
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})