import { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/page',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  },
  {
    path: '/page',
    name: 'page',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/index.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  },
];
