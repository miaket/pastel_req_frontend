import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userId: 0,
    userName: '',
  },
  mutations: {
    changeUserId(state, payload){
      state.userId = payload.userId
    },
    changeUserName(state, payload){
      state.userName = payload.userName
    }
  }
});
