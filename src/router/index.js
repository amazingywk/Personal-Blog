import { createRouter, createWebHashHistory } from "vue-router";
// import NavBar from "@/components/NavBar";

export const allRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('@/pages/login')
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=>import('@/pages/home')
  },
  {
    path: '/article/add',
    name: 'ArticleAdd',
    component: ()=>import('@/pages/article/add')
  },
  {
    path:'/article/detail',
    name:'ArticleDetail',
    component:()=>import('@/pages/article/detail')
  },
  {
    path: '/classification',
    name: 'Classification',
    component: ()=>import('@/pages/classification')
  },
  {
    path: '/message/manage',
    name: 'MessageManage',
    component: ()=>import('@/pages/message/manage')
  },
  {
    path:'/message/add',
    name:'MessageAdd',
    component: ()=>import('@/pages/message/add')
  },
  {
    path: '/user/manage',
    name: 'UserManage',
    component: ()=>import('@/pages/user/manage'),
  },
  {
    path: '/user/add',
    name: 'addUser',
    component: ()=>import('@/pages/user/addAndUpdate'),
    children: [
      {
        path: '/user/update',
        name: 'UpdateUser',
        component: ()=>import('@/pages/user/addAndUpdate'),
      },
    ],
  },
  {
    path:'/user/detail',
    name:'UserDetail',
    component:()=>import('@/pages/user/detail')
  },
  {
    path:'/article/manage',
    name:'ArticleCheck',
    component:()=>import('@/pages/article/manage')
  },
  {
    path: '/user/own',
    name: 'Own',
    component: ()=>import('@/pages/user/own')
  },
  {
    path: '/sponsor',
    name: 'Sponsor',
    component: ()=>import('@/pages/sponsor')
  },
  {
    path: '/about',
    name: 'About',
    component: ()=>import('@/pages/about')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes,
})

export default router