// import { AsyncRoutes } from '@/router';
import {lazy} from 'react';
import manageRoutes from './manage';
import notFound from '@/pages/404';
import bidden from '@/pages/bidden';

export const AsyncRoutes: RouteConfig[] = [{
  path: '/',
  name: 'Index',
  meta: {title: '我的博客', permission: ['home:view', 'editor:view', 'article:view']},
  component: lazy(() => import('@/pages/index')),
  children: [{
    path: '/',
    name: 'Home',
    exact: true,
    meta: {title: '首页', permission: ['home:view']},
    component: lazy(() => import('@/pages/home')),
  }, {
    path: '/editor',
    name: 'user',
    exact: true,
    meta: {title: '写文章', permission: ['editor:view']},
    component: lazy(() => import('@/pages/createNew')),
  }, {
    path: '/article/detail/:articleId',
    name: 'articleDetail',
    exact: true,
    meta: {title: '文章详情', permission: ['article:view']},
    component: lazy(() => import('@/pages/article-detail')),
  }]
}];

export const constantRoutes: RouteConfig[] = [{
  path: '/404',
  name: '404',
  exact: true,
  meta: {title: 'Not Found'},
  component: notFound,
},{
  path: '/bidden',
  name: 'bidden',
  exact: true,
  meta: {title: 'Bidden'},
  component: bidden,
},{
  path: '/*',
  name: '404',
  meta: {title: 'Not Found'},
  component: notFound,
}];

const routes = [...AsyncRoutes, ...manageRoutes, ...constantRoutes];
export default routes;