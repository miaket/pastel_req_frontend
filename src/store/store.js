import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user:{
      id: 0,
      name: '',
    },
    form:{
      message: '',
      urgencyLevel: 0,
      complete: false,
      regNumber: [11111, 11112, 11113]
    }
  },
  getters: {
    getUser: state => {
      return state.user;
    },
    getForm: state => {
      return state.form;
    },
  },
  mutations: {
    changeUserid(state, payload){
      state.user.id = payload.id
    },
    changeUsername(state, payload){
      state.user.name = payload.username
    },
    changeForm(state, payload){
      for (let key in payload.form)
          state.form[key] = payload.form[key];
    }
  }
});
