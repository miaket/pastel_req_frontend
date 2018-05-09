import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    changeUserId(state, payload){
      state.userId = payload.userId
    }
  }
});
