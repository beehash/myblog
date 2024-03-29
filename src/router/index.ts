/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-11-18 18:10:05
 */
import {lazy} from 'react';
import manageRoutes from './manage';
import notFound from '@/pages/404';
import bidden from '@/pages/bidden';
import Layout from '@/components/Layout';

const routes: RouteConfig[] = [
  {
    path: '/home',
    name: 'Index',
    meta: {title: '我的博客', permission: ['home:view']},
    component: Layout,
    children: [{
      path: '',
      name: 'Home',
      exact: true,
      meta: {title: '首页', permission: ['home:view']},
      component: lazy(() => import('@/pages/home')),
    }]
  }, {
    path: '/editor',
    name: 'Editor',
    meta: {title: '写文章', permission: ['article:view']},
    component: Layout,
    children: [{
      path: ':inviteCode',
      name: 'Editor.New',
      exact: true,
      meta: {title: '写文章', permission: ['article:view']},
      component: lazy(() => import('@/pages/createNew')),
    }]
  }, {
    path: '/article',
    name: 'Article',
    meta: {title: '文章', permission: ['article:view']},
    component: Layout,
    children: [{
      path: 'detail/:articleId',
      name: 'Article.Detail',
      exact: true,
      meta: {title: '文章详情', permission: ['article:view']},
      component: lazy(() => import('@/pages/ArticleDetail')),
    }]
  }, {
    path: '/test',
    name: 'Test',
    exact: true,
    meta: {title: '测试', permission: ['*']},
    component: lazy(() => import('@/testPages/test-router')),
  }
];

const constantRoutes: RouteConfig[] = [{
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
}];

const AsyncRoutes = [...routes, ...manageRoutes];
export {AsyncRoutes, constantRoutes};
