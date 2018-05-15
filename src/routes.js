import Form from './components/Shared/Formbox.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Shared/Header.vue';
import Signin from './components/auth/Signin.vue';
export const routes = [
    {path: '/signin', name: 'signin', components:{
      default: Signin,
      'header-top': Header
    }},
    { path: '/home', name: 'home', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/form', components: {
        default: Form,
        'header-top': Header
    } },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/signin' }
];