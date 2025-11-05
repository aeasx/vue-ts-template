import AboutView from '@/pages/AboutView.vue';
import HomeView from '@/pages/HomeView.vue';

export const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutView,
  },
];
