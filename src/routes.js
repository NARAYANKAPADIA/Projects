import { createRouter, createWebHistory } from "vue-router";
// import Profile from "./components/Profile.vue";
import Home from './components/Home/Home.vue';
import Bag from './components/Bag/Bag.vue'
import Checkout from './components/Bag/Checkout.vue';
import Ordered from './components/Bag/Ordered.vue';
import Favourits from './components/Favourits/Favourits.vue'

const routes = [
  {
    name: 'home',
    component: Home,
    path: '/',
  },
  {
    name: 'bag',
    component: Bag,
    path: '/bag',
  },
  {
    name: 'checkout',
    component: Checkout,
    path: '/checkout',
  },
  {
    name: 'ordered',
    component: Ordered,
    path: '/ordered',
  },
  {
    name: 'favourites',
    component: Favourits,
    path: '/favourites',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
