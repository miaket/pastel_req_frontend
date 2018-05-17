import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userid: 0,
    username: '',
  },
  getters: {
    getUsername: state => {
      return state.username
    }
  },
  mutations: {
    changeUserid(state, payload){
      state.userid = payload.userid
    },
    changeUsername(state, payload){
      state.username = payload.username
    }
  }
});
