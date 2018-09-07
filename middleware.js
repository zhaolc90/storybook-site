const proxy = require('http-proxy-middleware')

module.exports = function expressMiddleware (router) {
  router.use('/api', proxy({
    target: 'https://www.baidu.com',
    changeOrigin: true
  }))
}