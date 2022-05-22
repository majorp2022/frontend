const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
    target: 'http://bac-1.herokuapp.com/',
    changeOrigin: true,
}

module.exports = function(app) {
  app.use('/api', createProxyMiddleware(options));
};

