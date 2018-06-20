import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user:{
      id: 0,
      name: '',
    }
  },
  getters: {
    getUsername: state => {
      return state.user.name
    },
    getUserid: state =>{
      return state.user.id
    }
  },
  mutations: {
    changeUserid(state, payload){
      state.user.id = payload.id
    },
    changeUsername(state, payload){
      state.user.name = payload.username
    }
  }
});
