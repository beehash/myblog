/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-11-18 18:10:05
 */
const proxy  = require('http-proxy-middleware');

const devServer = 'http://localhost:3003';
// const devServer = 'http://admin.cloudclab.top';
module.exports = function(app) {
  app.use(
    proxy('/blog/api', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: devServer, //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      /*
      	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
      // pathRewrite: {'^/blog': '/blog'} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
    }),
    proxy('/hello', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: 'http://localhost:3001', //配置转发目标地址(能返回数据的服务器地址)
      changeOrigin: true, //控制服务器接收到的请求头中host字段的值
      // pathRewrite: {'^/hello': '/'}
    }),
  )
};