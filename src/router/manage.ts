const manageRoutes = [{
  path: '/manage',
  name: 'articleDetail',
  meta: {title: '文章详情', permission: 'articleDetail'},
  component: () => import('@/pages/createNew'),
  children: [{

  }]
}]
export default manageRoutes;