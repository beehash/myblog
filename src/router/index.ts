export const AsyncRoutes = [{
  path: '/',
  component: () => import('@/pages/index'),
  children: [{
    path: '/editor',
    name: 'USER',
    meta: {title: '写文章', permission: 'editor'},
    component: () => import('@/pages/createNew'),
  }, {
    path: '/article/detail/:articleId',
    name: 'articleDetail',
    meta: {title: '文章详情', permission: 'articleDetail'},
    component: () => import('@/pages/article-detail'),
  }]
}];

export const constantRoutes: RouteConfig[] = [{
  path: '/',
  name: 'Home',
  meta: {title: '首页'},
  component: () => import('@/pages/home'),
}, {
  path: '/404',
  name: '404',
  meta: {title: 'Not Found'},
  component: () => import('@/pages/404'),
}]