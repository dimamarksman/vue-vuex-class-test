import Vue from 'vue';
import Vuex from 'vuex';

import { INCREMENT, DECREMENT } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count: 0,
  },
  getters: {
    count(state) {
      return state.count;
    },
  },
  mutations: {
    [INCREMENT](state) {
      state.count += 1;
    },
    [DECREMENT](state) {
      state.count -= 1;
    },
  },
  actions: {
    increment({ commit }) {
      commit(INCREMENT);
    },
    decrement({ commit }) {
      commit(DECREMENT);
    },
  },
});
