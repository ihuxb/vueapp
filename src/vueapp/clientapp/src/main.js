import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

// 模块
import Home from './components/HelloWorld.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import NotFound from './components/404.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        props: {
            msg:"Welcome to Your Vue.js App"
        },
        meta: {
            title: 'webapp'
        }
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        meta: {
            title: '注册'
        }
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        name: '404',
        path: '/404.html',
        component: NotFound,
        meta: {
            title: '404'
        }
    },
    {
        path: '*',
        redirect: {
            name: "404"
        }
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title == undefined ? '默认标题' : to.meta.title
    if (to.meta.requireAuth) {
        //let token = Cookies.get('access_token');
        //let anonymous = Cookies.get('user_name');
        //if (token) {
        //    next({
        //        path: '/login',
        //        query: {
        //            redirect: to.fullPath
        //        }
        //    })
        //}
    }
    next();
})