const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    devServer:{
      proxy:{
        '/api':{
          target:'http://localhost:8080/',
          ws: true,
          changeOrigin: true,
          pathRewrite:{
            '^/api': '/mock'
          }
        }
      }
    }
  }
})
