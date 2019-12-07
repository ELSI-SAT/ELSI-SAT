/*=========================================================================================
  File Name: vue.config.js
  Description: configuration file of vue
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// @see https://cli.vuejs.org/guide/mode-and-env.html#using-env-variables-in-client-side-code
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  publicPath: '/',
  transpileDependencies: [
    'resize-detector'
  ],
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
}

