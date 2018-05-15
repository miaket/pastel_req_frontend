import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userid: 0,
    userName: '',
  },
  mutations: {
    changeUserId(state, payload){
      state.userid = payload.userid
    },
    changeUserName(state, payload){
      state.userName = payload.userName
    }
  }
});
