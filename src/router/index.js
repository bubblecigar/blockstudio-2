import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/about',
    alias: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/websites',
    name: 'Websites',
    component: () => import('../views/Websites.vue'),
  },
  {
    path: '/branding',
    name: 'Branding',
    component: () => import('../views/Branding.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
