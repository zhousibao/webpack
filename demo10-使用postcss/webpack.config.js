const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: { 
              singleton: true
            }
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]_[local]_[hash:base64:5]'
              }
            },
            {
              loader:'postcss-loader',
              options: {
                ident: 'postcss',
                plugins:[
                // require('autoprefixer')(), // postcss-cssnext 已经包含了autoprefixer//
                  require('postcss-cssnext')(), //兼容css3新属性方法
                  require('cssnano')() //压缩css
                ]
              }
            },
            {
              loader:'sass-loader'
            } 
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].min.css',
      allChunks: false
    })
  ],
  mode: 'development'
}   