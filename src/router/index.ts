import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const history = createWebHistory();
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home/index",
    component: () => import("@views/home/index.vue"),
    children: [
      {
        path: "/home/index",
        name: "首页",
        component: () => import("@/views/home/homepage/index.vue"),
      },
      {
        path: "/home/scheme",
        name: "解决方案",
        component: () => import("@/views/home/scheme/index.vue"),
      },
      {
        path: "/home/aboutus",
        name: "关于我们",
        component: () => import("@/views/home/aboutus/index.vue"),
      },
      {
        path: "/home/contactus",
        name: "联系我们",
        component: () => import("@/views/home/contactus/index.vue"),
      },
      {
        path: "/home/index/tracking",
        name: "单号追踪",
        component: () => import("@/views/home/homepage/tracking/index.vue"),
      }, {
        path: "/home/index/privacyPolicy",
        name: "隐私协议",
        component: () => import("@/views/home/homepage/privacyPolicy/index.vue"),
      },
    ],
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("@views/shop/index.tsx"),
  },
  {
    path: "/message",
    name: "message",
    component: () => import("@views/message/index.tsx"),
  },
  {
    path: "/person",
    name: "person",
    component: () => import("@views/person/index.tsx"),
  },
];
const router = createRouter({
  history,
  routes,
});

export default router;
