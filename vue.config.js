// const { ChakraLoaderPlugin } = require('chakra-loader')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin

const pwaArgs = {
  themeColor: '#FFF',
  name: 'Reboost'
}

module.exports = {
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'cordova-app'
  },
  lintOnSave: false,
  configureWebpack: {
    plugins: [/*new BundleAnalyzerPlugin()*/]
  },
  chainWebpack: config => {
    config.plugin('pwa').tap(args => {
      return [pwaArgs]
    })
  }
}
