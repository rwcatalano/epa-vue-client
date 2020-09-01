import Vue from 'vue';
import VueRouter from 'vue-router';
import Area from '../views/Area.vue';
import Hypotenuse from '../views/Hypotenuse.vue';
import Seconds from '../views/Seconds.vue';
import Recursion from '../views/Recursion.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/area',
    name: 'Area',
    component: Area,
  },
  {
    path: '/hypotenuse',
    name: 'Hypotenuse',
    component: Hypotenuse,
  },
  {
    path: '/seconds',
    name: 'Seconds',
    component: Seconds,
  },
  {
    path: '/recursion',
    name: 'Recursion',
    component: Recursion,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
