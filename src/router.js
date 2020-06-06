import { createRouter, createWebHistory } from 'vue-router';

const baseURL = process.env.BASE_URL;
console.log(`BASE_URL: ${baseURL}\nlocation.pathname: ${location.pathname}`);

const routerHistory = createWebHistory(baseURL);

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: () => import('./routes/Home.vue'),
    },
    {
      path: '/contact',
      component: () => import('./routes/Contact.vue'),
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('./routes/Page404.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (from.path === to.path) {
    debugger;
  }

  console.log(`%c${from ? from.path + ' ' : ''}→ ${to.path}`, 'background-color: #dee5ec; color: LightSlateGrey; padding: 2px 6px; border-radius: 3px;');
  next();
})

export { router };