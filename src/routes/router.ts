import AboutView from '@/components/AboutView.vue';
import HomeView from '@/components/HomeView.vue';

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
