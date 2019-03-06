const webpack = require('webpack')
const path = require('path')

module.esports = {
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist/'),
    port: 8012,
    hot: true,
    //hotOnly: true,
    overlay: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://www.jianshu.com',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  mode: 'development'
}