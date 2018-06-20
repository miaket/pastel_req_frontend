import Form from './components/Shared/Formbox.vue';
// import UserStart from './components/user/UserStart.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Shared/Header.vue';
import Login from './components/auth/Login.vue';
import Navmenu from './components/Shared/Navmenu.vue';
import Myreq from './components/view/Myreq.vue';

export const routes = [
    {path: '/login', name: 'login', components:{
      default: Login,
      'header-top': Header
    }},
    { path: '/home', name: 'home', components: {
        default: Home,
        'header-top': Header,
        'menu-top': Navmenu
    } },
    { path: '/form', components: {
        default: Form,
        'header-top': Header,
        'menu-top': Navmenu
    } },
    { path: '/myrequests', components: {
        default: Myreq,
        'header-top': Header,
        'menu-top': Navmenu
    } },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/login' }
];