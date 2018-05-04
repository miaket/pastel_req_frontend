import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Vuex from 'vuex'
//import { store } from './store/store';

Vue.use(VueResource);
Vue.use(Vuex);
Vue.http.options.root = 'http://127.0.0.1:3100/api/';
Vue.prototype.$userId = '1';

const store = new Vuex.Store({
  state: {
    userId: 0
  },
  mutations: {
  	changeUserId(state, payload){
      state.userId = payload.userId
    }
  }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
