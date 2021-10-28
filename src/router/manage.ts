const manageRoutes: RouteConfig[] = [{
  path: '/manage',
  name: 'articleDetail',
  meta: {title: '后台管理系统', permission: ['manage:auth']},
  component: () => import('@/manage/pages/manage'),
  children: [{
    path: '/',
    name: 'Manage.Index',
    meta: {title: '首页'},
    component: () => import('@/manage/pages/index'),
  }, {
    path: '/user',
    name: 'Manage.User',
    meta: {title: '用户管理'},
    component: () => import('@/manage/pages/user'),
  }]
}];

export default manageRoutes;