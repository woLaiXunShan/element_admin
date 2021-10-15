import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tags: sessionStorage.tags,
        isCollapse: false
    },
    mutations: {
        TAG: (state, res) => {
            state.tags = res
            sessionStorage.tags = res
        },
        IS_COLLAPSE: (state) => {
            state.isCollapse = !state.isCollapse
        },
    },
    actions: {

    }
})