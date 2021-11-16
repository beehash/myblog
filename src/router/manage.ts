import {lazy} from 'react';
const manageRoutes: RouteConfig[] = [{
  path: '/manage',
  name: 'articleDetail',
  meta: {title: '后台管理系统', permission: ['manage:index:view', 'manage:user:view']},
  component: lazy(() => import('@/manage/pages/manage')),
  children: [{
    path: '/',
    name: 'Manage.Index',
    exact: true,
    meta: {title: '首页', permission: ['manage:index:view']},
    component: lazy(() => import('@/manage/pages/index')),
  }, {
    path: '/user',
    name: 'Manage.User',
    exact: true,
    meta: {title: '用户管理', permission: ['manage:user:view']},
    component: lazy(() => import('@/manage/pages/user')),
  }]
}];

export default manageRoutes;