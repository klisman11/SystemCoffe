import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "NotFound" */ '../views/404.vue')
    },
    {
        path: '/',
        name: 'HomeOne',
        component: () => import(/* webpackChunkName: "home-one" */ '../views/HomeOne.vue')
    },
    {
        path: '/home-two',
        name: 'HomeTwo',
        component: () => import(/* webpackChunkName: "home-two" */ '../views/HomeTwo.vue')
    },
    {
        path: '/home-three',
        name: 'HomeThree',
        component: () => import(/* webpackChunkName: "home-three" */ '../views/HomeThree.vue')
    },
    {
        path: '/home-four',
        name: 'HomeFour',
        component: () => import(/* webpackChunkName: "home-four" */ '../views/HomeFour.vue')
    },
    {
        path: '/home-five',
        name: 'HomeFive',
        component: () => import(/* webpackChunkName: "home-five" */ '../views/HomeFive.vue')
    },
    {
        path: '/home-six',
        name: 'HomeSix',
        component: () => import(/* webpackChunkName: "home-six" */ '../views/HomeSix.vue')
    },
    {
        path: '/coming-soon',
        name: 'ComingSoon',
        component: () => import(/* webpackChunkName: "coming-soon" */ '../views/ComingSoon.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
  
export default router;
