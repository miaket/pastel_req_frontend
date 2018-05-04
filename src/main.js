import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Vuex from 'vuex'
//import { store } from './store/store';
Vue.use(VueResource);
Vue.use(Vuex);
Vue.http.options.root = 'http://127.0.0.1:3100/api/';
//Vue.prototypee.$eventHub = new Vue(); //Global event bus
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


// new Vue({
//   el: '#app',
//   computed: {
//     count () {
// 	    return store.state.count
//     }
//   },
//   methods: {
//     increment () {
//       store.commit('increment')
//     },
//     decrement () {
//     	store.commit('decrement')
//     }
//   }
// })