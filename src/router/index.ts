import {lazy} from 'react';
import manageRoutes from './manage';

export const AsyncRoutes: RouteConfig[] = [{
  path: '/',
  name: 'Index',
  meta: {title: '我的博客', permission: ['home:view', 'editor:view', 'article:view']},
  component: lazy(() => import('@/pages/index')),
  children: [{
    path: '/',
    name: 'Home',
    meta: {title: '首页', permission: ['home:view']},
    component: lazy(() => import('@/pages/home')),
  }, {
    path: '/editor',
    name: 'user',
    meta: {title: '写文章', permission: ['editor:view']},
    component: lazy(() => import('@/pages/createNew')),
  }, {
    path: '/article/detail/:articleId',
    name: 'articleDetail',
    meta: {title: '文章详情', permission: ['article:view']},
    component: lazy(() => import('@/pages/article-detail')),
  }]
}];

export const constantRoutes: RouteConfig[] = [{
  path: '/404',
  name: '404',
  meta: {title: 'Not Found'},
  component: lazy(() => import('@/pages/404')),
}];

export { manageRoutes };
