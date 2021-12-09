const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname,'./src/assets/css/variables.less')
      ]
    }
  },
  devServer:{
    open: true,
    proxy: {
      '/api':{
        target: 'http://localhost:9000',
        changeOrigin: true,
        // ws: true,
        pathRewrite:{"^/api":""}
      }
    }
  },
}
