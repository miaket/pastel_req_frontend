import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import { routes } from './routes';
import { store } from './store/store';
import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.http.options.root = 'http://127.0.0.1:3100/api/';

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
