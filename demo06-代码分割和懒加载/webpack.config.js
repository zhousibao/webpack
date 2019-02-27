var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    'pageA': './src/pageA.js', //方法require.ensure()
    'pageB': './src/pageB.js' //方法import()

  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath:'./dist/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  optimization: {
    // webpack4的公共代码提取插件
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          minSize: 1,
          priority: 0
        },
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10
        }
      }
    }
  }, 
  mode: 'development'
}   